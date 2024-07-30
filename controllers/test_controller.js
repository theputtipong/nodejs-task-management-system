const axios = require("axios");

const url =
  "http://192.168.11.126:8000/api/v1/locations/hierarchy/?all=true&facility=2";
// "https://fm-dev.sitearound.com/api/v1/locations/hierarchy/?all=true&facility=2";

const frontUrl = "http://192.168.11.126:3000";
// "https://fm-dev.sitearound.com";

const token = "IlXTGV1OXhS3cMek33DzWFrKfYqGdu";

const interval = 100000; // Time in milliseconds between requests (1 second)
const concurrentTasks = 1000;

async function makeRequest(taskId) {
  try {
    // const response = await axios.get(url); //normal case

    // Configuration object
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Accept: "application/json, text/plain, */*",
        "Accept-Language": "th,en-US;q=0.9,en;q=0.8",
        Authorization: `Bearer ${token}`,
        Connection: "keep-alive",
        Origin: `${frontUrl}`,
        Referer: `${frontUrl}/`,
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0",
        "sec-ch-ua":
          '"Not/A)Brand";v="8", "Chromium";v="126", "Microsoft Edge";v="126"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
      },
    };
    const response = axios.request(config);
    // console.log(`Task ${taskId}: Response:`, response.data);
    console.log(
      `Task ${taskId}: Response:`,
      `Time: ${new Date().toLocaleTimeString()}`
    );
  } catch (error) {
    console.error(`Task ${taskId}: Error:`, error.message);
  }
}

// Function to create multiple requests
async function makeConcurrentRequests() {
  // Array to hold all request promises
  const tasks = [];

  for (let i = 0; i < concurrentTasks; i++) {
    tasks.push(makeRequest(i));
  }

  // Wait for all requests to finish
  await Promise.all(tasks);
}

// Set interval to repeatedly call the API
setInterval(makeConcurrentRequests, interval);

module.exports = {
  makeConcurrentRequests,
};
