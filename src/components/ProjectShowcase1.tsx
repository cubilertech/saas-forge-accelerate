"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { HalomotButton } from "../ui-components/HalomotButton";
import { Badge } from "../ui/badge";
import { ProjectShowcaseProps } from "@/types";

export const ProjectShowCase = ({
  testimonials,
  autoplay = false,
  colors = { name: "#fff", position: "gray-500", testimony: "gray-500" },
  fontSizes = { name: "2xl", position: "sm", testimony: "lg" },
  spacing = {
    top: "20",
    bottom: "20",
    lineHeight: "1.5",
    nameTop: "0",
    nameBottom: "0.5em",
    positionTop: "0",
    positionBottom: "0.25em",
    testimonyTop: "1em",
    testimonyBottom: "1em",
  },
  desktopVersionBottomThreshold = 1024,
  mobile = {},
  imageAspectRatio = 1.37,
  isRTL = false,
  onItemClick,
  outerRounding = "18.2px",
  innerRounding = "18px",
  outlineColor = "#11B7D4",
  hoverOutlineColor = "#11B7D4",
  buttonInscriptions = {
    previousButton: "Previous",
    nextButton: "Next",
    openWebAppButton: "View Case Study",
  },
  halomotButtonGradient = "linear-gradient(to right, #11B7D4, #0091ac)",
  halomotButtonBackground = "#111014",
  halomotButtonTextColor = "#fff",
  halomotButtonOuterBorderRadius = "6.34px",
  halomotButtonInnerBorderRadius = "6px",
  halomotButtonHoverTextColor,
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const [componentWidth, setComponentWidth] = useState(0);
  const componentRef = useRef<HTMLDivElement>(null);

  // Use Mobile Config (with defaults)
  const currentFontSizes =
    isMobileView && mobile.fontSizes ? mobile.fontSizes : fontSizes;
  const currentSpacing = {
    ...spacing,
    ...(isMobileView && mobile.spacing ? mobile.spacing : {}),
  };

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const handleResize = useCallback(() => {
    if (componentRef.current) {
      setComponentWidth(componentRef.current.offsetWidth);
      setIsMobileView(
        componentRef.current.offsetWidth < desktopVersionBottomThreshold
      );
    }
  }, [desktopVersionBottomThreshold]);

  useEffect(() => {
    const node = componentRef.current;
    const resizeObserver = new ResizeObserver(handleResize);
    if (node) {
      resizeObserver.observe(node);
    }
    handleResize(); // Initial check
    return () => {
      if (node) {
        resizeObserver.unobserve(node);
      }
    };
  }, [handleResize]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const calculateGap = (width: number) => {
    const minWidth = 1024;
    const maxWidth = 1456;
    const minGap = 60;
    const maxGap = 86;
    if (width <= minWidth) return minGap;
    if (width >= maxWidth)
      return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
    return (
      minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
    );
  };

  return (
    <div
      ref={componentRef}
      className={`w-full mx-auto antialiased  py-${currentSpacing.top} pb-${currentSpacing.bottom}`}
      style={{
        lineHeight: currentSpacing.lineHeight,
        backgroundColor: "transparent",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div
        className="relative"
        style={{
          display: "grid",
          gridTemplateColumns: isMobileView
            ? "1fr"
            : isRTL
            ? "1fr 1fr"
            : "1fr 1fr",
          gap: `${calculateGap(componentWidth)}px`,
        }}
      >
        {isRTL && !isMobileView ? (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={testimonial.src}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].name}
                </h3>
                <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].designation}
                </p>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                    textAlign: "right",
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div
                className={`flex ${
                  isMobileView
                    ? "flex-col pt-12 gap-3"
                    : "flex-row md:pt-0 gap-4"
                } w-full`}
                style={{ justifyContent: "flex-start" }}
              >
                {isMobileView ? (
                  <>
                    <div className="flex gap-3 w-full">
                      <HalomotButton
                        inscription={buttonInscriptions.previousButton}
                        onClick={handlePrev}
                        fillWidth
                        gradient={halomotButtonGradient}
                        backgroundColor={halomotButtonBackground}
                        textColor={halomotButtonTextColor}
                        innerBorderRadius={halomotButtonInnerBorderRadius}
                        outerBorderRadius={halomotButtonOuterBorderRadius}
                        {...(halomotButtonHoverTextColor
                          ? { hoverTextColor: halomotButtonHoverTextColor }
                          : {})}
                      />
                      <HalomotButton
                        inscription={buttonInscriptions.nextButton}
                        onClick={handleNext}
                        fillWidth
                        gradient={halomotButtonGradient}
                        backgroundColor={halomotButtonBackground}
                        textColor={halomotButtonTextColor}
                        innerBorderRadius={halomotButtonInnerBorderRadius}
                        outerBorderRadius={halomotButtonOuterBorderRadius}
                        {...(halomotButtonHoverTextColor
                          ? { hoverTextColor: halomotButtonHoverTextColor }
                          : {})}
                      />
                    </div>
                    <HalomotButton
                      inscription={buttonInscriptions.openWebAppButton}
                      onClick={() =>
                        onItemClick &&
                        onItemClick(
                          testimonials[active].viewCaseStudyLink || ""
                        )
                      }
                      fillWidth
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                      href={testimonials[active].viewCaseStudyLink}
                    />
                  </>
                ) : (
                  <>
                    <HalomotButton
                      inscription={buttonInscriptions.previousButton}
                      onClick={handlePrev}
                      fixedWidth="172px"
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                    />
                    <HalomotButton
                      inscription={buttonInscriptions.nextButton}
                      onClick={handleNext}
                      fixedWidth="172px"
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                    />
                    <HalomotButton
                      inscription={buttonInscriptions.openWebAppButton}
                      onClick={() =>
                        onItemClick &&
                        onItemClick(
                          testimonials[active].viewCaseStudyLink || ""
                        )
                      }
                      fillWidth
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                      href={testimonials[active].viewCaseStudyLink}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full">
              <div
                className="relative"
                style={{ paddingTop: `${(1 / imageAspectRatio) * 100}%` }}
              >
                <AnimatePresence>
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.src}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: randomRotateY(),
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index) ? 0 : randomRotateY(),
                        zIndex: isActive(index)
                          ? 999
                          : testimonials.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: randomRotateY(),
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <ImageContainer
                        src={testimonial.src}
                        alt={testimonial.name}
                        outerRounding={outerRounding}
                        innerRounding={innerRounding}
                        outlineColor={outlineColor}
                        hoverOutlineColor={hoverOutlineColor}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
            <div className="flex justify-between flex-col py-4 w-full">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <h3
                  className={`font-bold text-3xl`}
                  style={{
                    fontSize: currentFontSizes.name,
                    color: colors.name,
                    marginTop: currentSpacing.nameTop,
                    marginBottom: currentSpacing.nameBottom,
                  }}
                >
                  {testimonials[active].name}
                </h3>
                {/* <p
                  style={{
                    fontSize: currentFontSizes.position,
                    color: colors.position,
                    marginTop: currentSpacing.positionTop,
                    marginBottom: currentSpacing.positionBottom,
                  }}
                >
                  {testimonials[active].designation}
                </p> */}
                {/* Tech Stack */}{" "}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {testimonials[active].techStack.slice(0, 4).map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {testimonials[active].techStack.length > 4 && (
                      <Badge className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs">
                        +{testimonials[active].techStack.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>
                <motion.p
                  style={{
                    fontSize: currentFontSizes.testimony,
                    color: colors.testimony,
                    marginTop: currentSpacing.testimonyTop,
                    marginBottom: currentSpacing.testimonyBottom,
                  }}
                >
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
              <div
                className={`flex ${
                  isMobileView
                    ? "flex-col pt-12 gap-3"
                    : "flex-row md:pt-0 gap-4"
                } w-full`}
              >
                {isMobileView ? (
                  <>
                    <div className="flex gap-3 w-full">
                      <HalomotButton
                        inscription={buttonInscriptions.previousButton}
                        onClick={handlePrev}
                        fillWidth
                        gradient={halomotButtonGradient}
                        backgroundColor={halomotButtonBackground}
                        textColor={halomotButtonTextColor}
                        innerBorderRadius={halomotButtonInnerBorderRadius}
                        outerBorderRadius={halomotButtonOuterBorderRadius}
                        {...(halomotButtonHoverTextColor
                          ? { hoverTextColor: halomotButtonHoverTextColor }
                          : {})}
                      />
                      <HalomotButton
                        inscription={buttonInscriptions.nextButton}
                        onClick={handleNext}
                        fillWidth
                        gradient={halomotButtonGradient}
                        backgroundColor={halomotButtonBackground}
                        textColor={halomotButtonTextColor}
                        innerBorderRadius={halomotButtonInnerBorderRadius}
                        outerBorderRadius={halomotButtonOuterBorderRadius}
                        {...(halomotButtonHoverTextColor
                          ? { hoverTextColor: halomotButtonHoverTextColor }
                          : {})}
                      />
                    </div>
                    <HalomotButton
                      inscription={buttonInscriptions.openWebAppButton}
                      onClick={() =>
                        onItemClick &&
                        onItemClick(
                          testimonials[active].viewCaseStudyLink || ""
                        )
                      }
                      fillWidth
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                      href={testimonials[active].viewCaseStudyLink}
                    />
                  </>
                ) : (
                  <>
                    <HalomotButton
                      inscription={buttonInscriptions.previousButton}
                      onClick={handlePrev}
                      fixedWidth="172px"
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                    />
                    <HalomotButton
                      inscription={buttonInscriptions.nextButton}
                      onClick={handleNext}
                      fixedWidth="172px"
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                    />
                    <HalomotButton
                      inscription={buttonInscriptions.openWebAppButton}
                      onClick={() =>
                        onItemClick &&
                        onItemClick(
                          testimonials[active].viewCaseStudyLink || ""
                        )
                      }
                      fillWidth
                      gradient={halomotButtonGradient}
                      backgroundColor={halomotButtonBackground}
                      textColor={halomotButtonTextColor}
                      innerBorderRadius={halomotButtonInnerBorderRadius}
                      outerBorderRadius={halomotButtonOuterBorderRadius}
                      {...(halomotButtonHoverTextColor
                        ? { hoverTextColor: halomotButtonHoverTextColor }
                        : {})}
                      href={testimonials[active].viewCaseStudyLink}
                    />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

type ImageContainerProps = {
  src: string;
  alt: string;
  outerRounding: string;
  innerRounding: string;
  outlineColor: string;
  hoverOutlineColor: string;
};

const ImageContainer = ({
  src,
  alt,
  outerRounding,
  innerRounding,
  outlineColor,
  hoverOutlineColor,
}: ImageContainerProps) => (
  <div
    className="relative h-full w-full project-showcase-image-container"
    style={{
      borderRadius: outerRounding,
      padding: "1px",
      backgroundColor: outlineColor,
      transition: "background-color 0.3s ease-in-out",
    }}
  >
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        borderRadius: innerRounding,
      }}
    >
      <img
        src={src}
        alt={alt}
        // layout="fill"
        draggable={false}
        className="h-full w-full object-fill object-center"
        // unoptimized
      />
    </div>
    <style>{`
      .project-showcase-image-container:hover {
        background-color: ${hoverOutlineColor} !important;
      }
    `}</style>
  </div>
);

//  <section
//         id="case-studies"
//         data-animate
//         className={`px-6 py-16 transition-all duration-1000 ${
//           isVisible("case-studies")
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-10"
//         }`}
//       >
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">
//               Our Success <span className="text-primary">Stories</span>
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               Real projects, real results. See how we've helped founders
//               transform their ideas into successful products.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {portfolioItems.map((item) => (
//               <Card
//                 key={item.id}
//                 className="bg-gradient-card card-blur hover-glow group cursor-pointer border border-border/20 overflow-hidden h-full"
//               >
//                 <div className="relative">
//                   <div className="aspect-[4/3] relative overflow-hidden">
//                     <img
//                       src={item.image}
//                       alt={`${item.name} project preview`}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
//                     <div className="absolute top-3 right-3">
//                       <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
//                         {item.industry}
//                       </Badge>
//                     </div>
//                     <div className="absolute bottom-3 left-3 right-3">
//                       <h3 className="text-white font-bold text-lg mb-1">
//                         {item.name}
//                       </h3>
//                     </div>
//                   </div>
//                 </div>

//                 <CardContent className="p-4 space-y-4">
//                   <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
//                     {item.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="space-y-2">
//                     <p className="text-xs font-semibold text-primary uppercase tracking-wider">
//                       Tech Stack
//                     </p>
//                     <div className="flex flex-wrap gap-1">
//                       {item.techStack.slice(0, 3).map((tech) => (
//                         <Badge
//                           key={tech}
//                           className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs"
//                         >
//                           {tech}
//                         </Badge>
//                       ))}
//                       {item.techStack.length > 3 && (
//                         <Badge className="bg-muted text-muted-foreground border-border px-2 py-1 text-xs">
//                           +{item.techStack.length - 3}
//                         </Badge>
//                       )}
//                     </div>
//                   </div>

//                   {/* Case Study Button */}
//                   <div className="pt-2">
//                     <Button
//                       size="sm"
//                       className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 text-xs rounded-lg font-medium w-full"
//                       onClick={() => {
//                         if (item.name === "AfterHire") {
//                           window.location.href = "/case-study/afterhire";
//                         } else if (item.name === "PriceUp") {
//                           window.location.href = "/case-study/priceup";
//                         } else if (item.name === "Pipa") {
//                           window.location.href = "/case-study/pipa";
//                         }
//                       }}
//                     >
//                       View Case Study
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           {/* View All Projects Button */}
//           <div className="text-center mt-8">
//             <Button
//               variant="outline"
//               className="glass-effect border-primary/30 text-primary hover:bg-primary/10 px-6 py-3 rounded-xl font-medium group"
//             >
//               View All Projects
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </div>
//         </div>
//       </section>
