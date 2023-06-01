/*--------------------------------------------------------------------------------
----- CANVAS/GRID MANAGEMENT (to handle the space and the grid holding the game of life)
--------------------------------------------------------------------------------*/

function retrieve_and_link_canvas() {
    // Retrieve the canvas container to hold the game of life
    const container = document.getElementById('canvas_container');
    const canvasWidth = container.offsetWidth;
    const canvasHeight = container.offsetHeight;
    // Create the real canvas used by P5.js and link it to the existing one
    canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent('canvas_container');
}

function initialize_grid() {
    // Draw a gray background into the canvas
    background(220);

    // Define the game of life grid configurations
    let x_start = margin_left, x_end = width - x_start;
    let y_start = margin_above, y_end = height - y_start;

    // Determine the lines horizontal/vertical spaces
    vertical_space = (y_end - y_start) / NB_ROWS;
    horizontal_space = (x_end - x_start) / NB_COLS;

    // Draw the horizontal lines to create the grid
    let number_h_lines = ((x_end - x_start) / NB_ROWS);
    for (let i = 0; i <= number_h_lines; i++) {
        // Vertical position of horizontal line N is equal to the top-margin + N times the vertical space
        const y = margin_above + i * vertical_space;
        line(x_start, y, x_end, y);
    }

    // Draw the vertical lines to create the grid
    let number_v_lines = ((x_end - x_start) / NB_COLS);
    for (let j = 0; j <= number_v_lines; j++) {
        // Horizontal position of vertical line N is equal to the left-margin + N times the horizontal space
        const x = margin_left + j * horizontal_space;
        line(x, y_start, x, y_end);
    }
}
