const generateComponents = (metadata) => {
  const html = [];

  // Helper function to recursively generate HTML code for child nodes
  const generateHTMLForNode = (node) => {
    const htmlElements = [];

    if (node.children) {
      node.children.forEach((childNode) => {
        const htmlElement = generateHTMLForNode(childNode);
        if (htmlElement) {
          htmlElements.push(htmlElement);
        }
      });
    }

    let htmlElement;

    if (node.type === "FRAME" || node.type === "GROUP") {
      htmlElement = document.createElement("div");
      htmlElement.setAttribute("id", node.name);
      htmlElement.setAttribute("class", "node");
    } else if (node.type === "TEXT") {
      htmlElement = document.createElement("p");
      htmlElement.textContent = node.characters;
      // Add CSS properties specific to text elements
    } else if (node.type === "IMAGE") {
      htmlElement = document.createElement("img");
      htmlElement.src = node.url;
      htmlElement.alt = node.altText;

      // Add CSS properties specific to image elements
    } else {
      htmlElement = document.createElement("div");

      // Add CSS properties for unknown node types
    }

    htmlElements.forEach((childElement) => {
      htmlElement.appendChild(childElement);
    });

    if (
      htmlElement.childNodes.length === 0 &&
      !htmlElement.textContent.trim()
    ) {
      return null; // Skip empty HTML elements
    }

    return htmlElement;
  };

  // Generate HTML code for each page
  metadata.document.children.forEach((page) => {
    // Generate HTML code for each artboard in the page
    page.children?.forEach((artboard) => {
      const htmlElement = generateHTMLForNode(artboard);

      if (htmlElement) {
        html.push(htmlElement.outerHTML);
      }
    });
  });

  return html.join("\n");
};

export { generateComponents };
