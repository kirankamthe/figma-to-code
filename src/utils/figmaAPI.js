// src/utils/figmaAPI.js

const fetchFigmaFileMetadata = async (fileId, apiKey) => {
  try {
    const response = await fetch(`https://api.figma.com/v1/files/${fileId}`, {
      headers: {
        "X-Figma-Token": apiKey,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Figma file metadata:", error);
  }
};

// Helper function to get a node by ID in the Figma metadata
const fetchFigmaNodeById = async (fileId, apiKey, nodeId) => {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${fileId}/nodes?ids=${nodeId}`,
      {
        headers: {
          "X-Figma-Token": apiKey,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Figma file image:", error);
  }
};

const fetchFigmaFileComponents = async (fileId, apiKey) => {
  try {
    const response = await fetch(
      `https://api.figma.com/v1/files/${fileId}/components`,
      {
        headers: {
          "X-Figma-Token": apiKey,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Figma file components:", error);
  }
};

export { fetchFigmaFileMetadata, fetchFigmaNodeById, fetchFigmaFileComponents };
