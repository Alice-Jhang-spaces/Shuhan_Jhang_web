Virtual Currency Trading Website

Project Overview

This is a two-page website focused on Virtual Currency Trading. The project is designed to demonstrate the use of CSS Grid, Flexbox, and SASS/SCSS features. The website includes a home page displaying cryptocurrency information and a trade page allowing users to interact with trade options.

This project demonstrates the usage of SASS for building a dynamic, responsive, and maintainable styling system. It incorporates variables, mixins, and a modular file structure for easier development and maintenance. The project also supports dark theme modifications and integrates CSS custom properties for theme management.

Folder Structure

bash
Copy code
.
├── css
│   ├── style.css            # Compiled CSS file
│   ├── style.css.map        # Source map for debugging
├── sass
│   ├── _variables.scss      # Contains all variables like colors, font-stacks
│   ├── _mixins.scss         # Contains all reusable mixins (e.g., flex-center, grid layouts)
│   ├── _flexbox.scss        # Flexbox specific styles
│   ├── _grid.scss           # Grid specific styles
│   ├── _img.scss            # Styles related to image handling
│   ├── _trad.scss           # Additional trade form styles
│   ├── _variablebtn.scss    # Button-specific variables and styles
│   ├── style.scss           # Main SCSS file that imports all partials
├── index.html               # Main HTML file
├── trade.html               # Trade section HTML
├── README.md                # Project documentation

SASS Files Breakdown

_flexbox.scss
    The _flexbox.scss file contains styles that leverage Flexbox for dynamic layout creation. It includes reusable styles for layout containers and boxes, such as placeholders for common styles across multiple components and Flexbox configurations for alignment, wrapping, and spacing.


SASS Features in _flexbox.scss:
    Placeholder Selector (%):
    %box-style allows for reusability of common styles across components, avoiding code duplication.

    Nesting:
    While not explicitly shown in this file, SASS supports nesting, and you can apply it if needed to structure your selectors more clearly.

    Flexbox Properties:
    The file makes extensive use of Flexbox properties (display: flex, justify-content, align-items, etc.) to control the layout of elements in a flexible container.

_grid.scss

The _grid.scss file contains styles related to the CSS Grid layout. It defines a responsive grid structure for displaying items in a clean and organized manner. This file utilizes grid properties to ensure flexibility and dynamic layout adjustment.

SASS Features and Properties Used:

Grid Layout:
The .grid-layout class is responsible for applying a grid structure to elements. It creates a flexible grid with two columns, spacing between grid items, and padding for a neat layout.
Properties:
display: grid: Activates grid layout for the container.
grid-template-columns: Defines the number and size of the columns (in this case, two equal-width columns).
grid-gap: Specifies the spacing between the grid items.
padding: Adds space around the grid container to separate it from other elements.
SASS Features in _grid.scss:

    Grid Properties:
T   he file uses grid-specific CSS properties to control the layout of items in a flexible and responsive manner.

    Nesting:
    While not explicitly shown in this file, SASS allows nesting, which can be used for additional styles within the grid layout.

_img.scss

The _img.scss file handles dynamic styling for images, particularly chart backgrounds. It includes a list of image URLs, layout properties like width and height, and a Fibonacci function for calculating dynamic margins. This file demonstrates how to combine SASS functions and mixins for advanced layout techniques.

SASS Features and Properties Used:

    List Variables:
    $image-urls: A list of URLs for images to be used as chart backgrounds. This allows for flexible use of images by simply referring to their index within the list.

    Math Operations in Variables:
    Dynamic calculations are done using math operations to define values for width, height, and gap. For example, $new-width + $extra-width dynamically calculates a new width based on the provided values.

    Functions:
    @function fibonacci: A custom SASS function is defined to generate Fibonacci sequences. This function is used to apply Fibonacci-based margins to elements, creating a visually balanced layout.

    Mixin with Dynamic Arguments:
    @mixin chart-background($index, $fibonacci-index): This mixin applies a dynamic background image, width, height, and margin to elements. It takes an index for the image and Fibonacci index for the margin calculation.

    Flexbox Layout:
    .chart-container: Flexbox is used to align and space chart elements. Dynamic gap values are applied using the list of gaps ($gaps), ensuring consistent spacing between elements.
    Box Shadows and Borders:
    Subtle shadows and borders are applied to the charts for visual aesthetics, providing a modern, clean look.

SASS Features in _img.scss:

    List Variables: SASS lists ($image-urls) allow dynamic selection of images.

    Math Operations: Math is used in variables ($new-width + $extra-width) to calculate dynamic values for layout properties.

    Functions: The Fibonacci function (@function fibonacci) generates Fibonacci numbers for dynamic spacing.
    Mixin with Dynamic Arguments: The chart-background mixin enables dynamic background images and dimensions based on passed arguments.
    Flexbox Properties: The .chart-container class uses Flexbox for layout and alignment.



_mixins.scss
The _mixins.scss file contains reusable SASS mixins for flexbox layouts, grid layouts, box shadows, and vendor prefixes. These mixins promote consistency across the styles and make it easier to apply dynamic properties like box shadows, responsive grids, and cross-browser compatibility.

SASS Features and Properties Used:

Mixins:

    Nesting:
    The .header, .footer, and .currency-item classes contain nested selectors, which allows for cleaner and more structured styling. For example, the nav ul li a selectors are nested to maintain the structure and hierarchy of the HTML elements.

    Pseudo-classes:
    The &:hover pseudo-class is used to change the background color of elements when hovered. This is applied inside the .currency-item class to change the background color when the user hovers over an item.

    Interpolation:
    The prefix mixin uses interpolation to generate vendor-prefixed properties dynamically, allowing the mixin to add browser-specific prefixes to CSS properties such as filter.

SASS Features in _mixins.scss:

    Mixins: Several reusable mixins are defined for flexbox, grid layout, box shadows, and vendor prefixes, allowing for consistent styling across components.

    Nesting: Nesting is used to structure the styles clearly, making the code more readable and maintainable.

    Pseudo-classes: The &:hover pseudo-class is used for hover effects, allowing dynamic changes to element styles on user interaction.

    Interpolation: Interpolation is used in the prefix mixin to dynamically generate vendor-prefixed properties.

_trad.scss

The _trad.scss file contains styles specifically for the trade section of the website, including global styles for the body, headers, forms, and the trade section. It leverages SASS features like variables, mixins, and placeholders for easy customization, as well as CSS Grid for layout structuring.

SASS Features and Properties Used:

    Variables:
    Several variables are defined to maintain consistency across the styles, such as colors for the primary and secondary themes, background colors for light and dark themes, and gradient colors for the trade form backgrounds.

 
    Mixins:
    gradient-bg: A mixin that applies a gradient background between two colors. This is used to apply background gradients to buttons and form elements dynamically.

    btn-styles: A reusable mixin for styling buttons. It includes properties for background color, text color, and hover state (with a dynamic darkening of the button color).

    Placeholder Selectors (%):
    %form-styles: This placeholder contains common form styling, such as layout and alignment. It is extended in various form-related elements across the file for consistency in appearance.

    Dark Theme Styling:
    The file provides support for a dark theme, where the background and text colors change when the .dark-theme class is applied to the body. This ensures that the website supports both light and dark modes without needing separate stylesheets.

    Nesting:
    SASS nesting is used throughout the file for better structure and organization. For example, the header and navigation styles are nested within the .header class, and the link styles are nested under the nav ul li structure.

    Grid Layout:
    The file uses CSS Grid in the .trade-form and .grid-layout classes. The grid structure is applied to the coin buttons and the currency display section, ensuring a responsive and flexible layout for these components.

    Pseudo-classes:
    The &:hover pseudo-class is used to style buttons and links, providing feedback when users hover over these interactive elements. For instance, links are underlined and buttons change color on hover.


SASS Features in _trad.scss:

    Variables: SASS variables are used for colors and dimensions to maintain a consistent theme throughout the styles.

    Mixins: Reusable mixins (gradient-bg, btn-styles) allow for consistent styling across buttons, gradients, and forms.

    Placeholder Selectors (%): The %form-styles placeholder is used to maintain a consistent form layout and design.

    Nesting: SASS nesting is used to structure the code cleanly, especially for header, form, and link styles.

    Grid Layout: CSS Grid is used for the .trade-form and .grid-layout classes to create responsive and adaptable layouts.

    Pseudo-classes: Hover effects are applied to buttons and links using the &:hover pseudo-class.


_variablebtn.scss
The _variablebtn.scss file defines variables that control the layout and sizing for images and charts. These variables are used to dynamically adjust widths, heights, and gaps between elements, offering flexibility and customization in the layout. This allows for easy adjustments to image and chart sizes, ensuring responsiveness and adaptability in different display contexts.

SASS Features and Properties Used:

Variables:
The file uses variables to store base values for image and chart dimensions, as well as for the spacing between chart elements. These variables make it easy to manage layout consistency across the project, allowing for adjustments without changing multiple individual styles.

Dynamic Calculations:
The combination of variables like $new-width + $extra-width allows for dynamic adjustments to widths, heights, and gaps without hardcoding values. This is particularly useful in responsive design, where elements may need to adjust based on screen size or content.


SASS Features in _variablebtn.scss:

    Variables: This file defines variables for layout properties, including dimensions and spacing for images and charts.


    Dynamic Adjustments: Variables like $new-width + $extra-width allow for dynamic changes to layout, making the design flexible and easily adjustable.




_variables.scss
The _variables.scss file defines the global variables used throughout the project. These variables provide a consistent way to manage colors, fonts, backgrounds, and other layout properties. The file also incorporates CSS custom properties (variables) that can be dynamically adjusted by JavaScript for additional flexibility, such as switching between light and dark themes.

SASS Features and Properties Used:

Color Variables:
The file contains color variables for defining the primary and secondary colors, shadow colors, and dark/light theme background colors.

    CSS Custom Properties (Inside :root):
    
    CSS custom properties (variables) are defined inside the :root selector for dynamic theming and interaction with JavaScript. This allows elements like buttons and colors to be updated dynamically at runtime without requiring a full page reload or stylesheet change.
    
    
    Properties:
    --primary-color: Primary color for use in various components, which can be updated by JavaScript.
    --primary-color-hover: Hover state color for buttons and interactive elements.
    --button-bg: Background color for buttons.
    --button-text-color: Color for button text.

Integration with JavaScript:
The --consumed-by-js custom property is defined to allow JavaScript to interact with CSS variables, allowing for dynamic style changes (such as switching themes) at runtime.
Dark Theme Modifications:
When the .dark-theme class is applied to the body, the file adjusts several custom properties to enable a dark theme, including the background color, button color, and text color for buttons. This allows the project to seamlessly switch between light and dark themes.



SASS Features in _variables.scss:

    Variables: SASS variables for colors, fonts, and backgrounds provide consistency and flexibility throughout the project.

    CSS Custom Properties: CSS variables inside :root allow for dynamic theming and integration with JavaScript for runtime changes.



style.scss
The style.scss file serves as the main stylesheet that imports various SASS partials. This file acts as a central point to compile and organize the styles, ensuring modularity and maintainability. Each partial file (_variables.scss, _mixins.scss, etc.) contains specific styles and features, making it easier to manage the project as it grows.

Imported Files:

_variables.scss:
This partial contains all the global variables used throughout the project, such as colors, fonts, and layout properties. The variables ensure consistency and provide flexibility for maintaining the theme across the project.
_mixins.scss:
This file contains reusable mixins that help to standardize common styles, such as Flexbox centering, grid layout, button styles, and vendor prefixes. These mixins make the code more DRY (Don't Repeat Yourself) and modular.
_grid.scss:
The grid layout partial handles the styles related to CSS Grid for creating dynamic, responsive layouts. This file is responsible for organizing elements into columns and rows in a structured way.
_flexbox.scss:
This partial contains Flexbox-specific styles for aligning and distributing elements within a container. It defines flexible layouts that can adapt to different screen sizes.
_trad.scss:
The trade-specific partial contains styles for the trade section of the website. It includes form styles, button styles, and the use of gradients. The file also supports dark and light themes for consistent visual appeal.
_img.scss:
This file manages the layout and styling of images and charts within the website, applying dynamic dimensions and margin calculations. It integrates image URLs and provides a responsive design for handling images in various sections.
SASS Features in style.scss:

Importing Partials: The @import directive is used to modularize the styles, splitting them into manageable pieces. Each partial deals with a specific aspect of the project (e.g., variables, grid, mixins).
Modularity: By breaking down the styles into smaller files, the project is easier to maintain, debug, and scale.
