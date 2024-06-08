# Surfing Website

## Deployment Link: [DEMO](https://surfing-website-phi.vercel.app/)

## Rules To Code

1. Destructuring pages, each section is a separate component;
2. Module.scss is used;
3. Style files are placed in a folder next to the component;
4. Naming:

- Components: CamelCase + index.ts for import.
- Folders: folders of components with a CamelCase, for the rest kebab‑case.
- CSS classes: CamelCase is used - className: blockName\_\_elementName.

6. If the component is not reused, then it is placed in the folder of the parent component.
7. The functional component is declaratively defined using an arrow function and prop type generics.
8. SVG images for interface decoration are stored in a folder `src/assets/icon`
9. Samples of user pictures are stored in a folder `public/images/componentName`

## Getting Started

This is an example of how you can run a project locally. Follow these simple steps as an example.

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/DmytroRd/surfing-website.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<!-- USAGE EXAMPLES -->

## Usage

### Running the Application

To run the application, use the following command:

```
   npm run dev
```

The application will be launched in development mode and can be accessed at
[http://localhost:5173](http://localhost:5173).

### Building the Project

To create an optimized production build of the project, use the following command:

```
   npm run build
```

### Preview

Before running the preview, make sure you have a production build ready by running the
`npm run build` command.

To preview the build and see how the application works in production mode, use the following
command:

```
   npm run preview
```
