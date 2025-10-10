import "./style.css";

const rows = [1, 2, 3, 4, 5, 6, 7, 8];
const columns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 h-full overflow-hidden w-full pointer-events-none z-0 scroll-mask-all-sides">
      <div className="absolute inset-0 h-full w-full bg-[var(--background)] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,transparent,white)]"></div>
      {rows.map((rowItem, rowIndex) => (
        <div key={rowIndex} className="flex">
          {columns.map((colItem, colIndex) => {
            const horizontalId = `gradient-horizontal-${rowIndex}-${colIndex}`;
            const verticalId = `gradient-vertical-${rowIndex}-${colIndex}`;

            const horizontalDelay =
              (rowIndex * columns.length + colIndex) * 0.3;
            const verticalDelay = horizontalDelay + 1;

            return (
              <div
                key={colIndex}
                className="flex flex-col items-start justify-center w-60 z-[1]"
              >
                <div className="flex items-center justify-center z-0">
                  <div className="h-6 w-6 bg-neutral-900 flex items-center justify-center rounded-full z-[1]">
                    <div className="h-2 w-2 bg-neutral-700 rounded-full z-[1]"></div>
                  </div>
                  <svg
                    width="170"
                    height="1"
                    viewBox="0 0 170 1"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-neutral-800 z-[1]"
                  >
                    <path d="M0.5 0.5H170" stroke="currentColor" />
                    <path
                      d="M0.5 0.5H300"
                      stroke={`url(#${horizontalId})`}
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient
                        id={horizontalId}
                        gradientUnits="userSpaceOnUse"
                        x1="0"
                        y1="0"
                        x2="100%"
                        y2="0"
                        className="animate-horizontal"
                        style={{ animationDelay: `${horizontalDelay}s` }}
                      >
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#dbd7d7" />
                        <stop offset="100%" stopColor="transparent" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <svg
                  width="1"
                  height="110"
                  viewBox="0 0 1 110"
                  className="text-neutral-800 ml-3 z-[1]"
                >
                  <path
                    d="M0.5 0.5V110"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M0.5 0.5V140"
                    stroke={`url(#${verticalId})`}
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id={verticalId}
                      gradientUnits="userSpaceOnUse"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="100%"
                      className="animate-vertical"
                      style={{ animationDelay: `${verticalDelay}s` }}
                    >
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#dbd7d7" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
