const backgroundBlue = "76, 128, 181";

const backgroundNodes = [
  [56, 120],
  [168, 72],
  [280, 152],
  [88, 296],
  [216, 296],
  [344, 336],
  [120, 472],
  [280, 488],
  [392, 544],
  [168, 656],
  [328, 704],
  [64, 768],
];

const backgroundEdges = {
  tree: [
    [0, 1], [1, 2], [0, 3], [1, 4], [4, 5], [3, 6],
    [4, 7], [7, 8], [6, 9], [7, 10], [9, 11],
  ],
  graph: [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 4], [3, 4],
    [4, 5], [3, 6], [4, 7], [5, 7], [6, 7], [6, 9],
    [7, 8], [7, 10], [9, 10], [9, 11],
  ],
};

document.querySelectorAll(".research-background[data-structure]").forEach((canvas) => {
  const context = canvas.getContext("2d");
  if (!context) return;

  context.strokeStyle = `rgba(${backgroundBlue}, 0.18)`;
  context.fillStyle = `rgba(${backgroundBlue}, 0.32)`;
  context.lineWidth = 2;
  context.lineCap = "round";
  context.beginPath();
  backgroundEdges[canvas.dataset.structure].forEach(([from, to]) => {
    context.moveTo(...backgroundNodes[from]);
    context.lineTo(...backgroundNodes[to]);
  });
  context.stroke();

  backgroundNodes.forEach(([x, y]) => {
    context.beginPath();
    context.arc(x, y, 4.5, 0, 2 * Math.PI);
    context.fill();
  });
});

const centralBackground = document.querySelector(".research-background--center");
const centralContext = centralBackground?.getContext("2d");

if (centralContext) {
  const variables = [[270, 180], [430, 100], [650, 160], [820, 190], [730, 390], [390, 380]];
  const factors = [[430, 240], [590, 290], [760, 280]];
  const neighborhoods = [[0, 1, 5], [1, 2, 5], [2, 3, 4]];

  // A bipartite factor graph connects circular variables to square constraints.
  centralContext.strokeStyle = `rgba(${backgroundBlue}, 0.06)`;
  centralContext.lineWidth = 1.5;
  centralContext.beginPath();
  factors.forEach(([x, y], index) => {
    neighborhoods[index].forEach((variable) => {
      centralContext.moveTo(x, y);
      centralContext.lineTo(...variables[variable]);
    });
  });
  centralContext.stroke();

  centralContext.fillStyle = `rgba(${backgroundBlue}, 0.055)`;
  variables.forEach(([x, y]) => {
    centralContext.beginPath();
    centralContext.arc(x, y, 7, 0, 2 * Math.PI);
    centralContext.fill();
  });
  factors.forEach(([x, y]) => {
    centralContext.fillRect(x - 6, y - 6, 12, 12);
  });

  // Nearest-neighbor bonds and two spin colors form a small square lattice.
  const spinStates = [
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
  ];
  const spinColors = [`rgba(${backgroundBlue}, 0.08)`, "rgba(76, 94, 121, 0.08)"];
  const spacing = 82;

  centralContext.strokeStyle = `rgba(${backgroundBlue}, 0.045)`;
  centralContext.beginPath();
  spinStates.forEach((row, rowIndex) => {
    row.forEach((spin, columnIndex) => {
      const x = 450 + columnIndex * spacing;
      const y = 570 + rowIndex * spacing;
      if (columnIndex < row.length - 1) {
        centralContext.moveTo(x, y);
        centralContext.lineTo(x + spacing, y);
      }
      if (rowIndex < spinStates.length - 1) {
        centralContext.moveTo(x, y);
        centralContext.lineTo(x, y + spacing);
      }
    });
  });
  centralContext.stroke();

  spinStates.forEach((row, rowIndex) => {
    row.forEach((spin, columnIndex) => {
      centralContext.beginPath();
      centralContext.arc(450 + columnIndex * spacing, 570 + rowIndex * spacing, 4, 0, 2 * Math.PI);
      centralContext.fillStyle = spinColors[spin];
      centralContext.fill();
    });
  });
}
