// utils/apiMonitor.js

export async function monitorApiCall(page, endpointSubstring, expectedStatus = 200) {
  let apiResponse;

  page.on('response', async (response) => {
    if (response.url().includes(endpointSubstring)) {
      apiResponse = response;
    }
  });

  return async () => {
    if (!apiResponse) {
      throw new Error(`No API response captured for: ${endpointSubstring}`);
    }
    const status = apiResponse.status();
    if (status !== expectedStatus) {
      throw new Error(`Expected ${expectedStatus}, got ${status} for: ${apiResponse.url()}`);
    }
  };
}
