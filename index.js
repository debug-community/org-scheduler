import axios from 'axios';

const {
  GH_TOKEN,
} = process.env;

const triggerWorkflow = async () => {
  try {
    const url = `https://api.github.com/repos/debug-community/.github/actions/workflows/automation.yml/dispatches`;

    const res = await axios.post(
      url,
      { ref: 'main' },
      {
        headers: {
          Authorization: `Bearer ${GH_TOKEN}`,
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );

    console.log(`[${new Date().toISOString()}] ✅ Workflow triggered successfully`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] ❌ Failed to trigger workflow`);
    console.error(err.response?.data || err.message);
  }
};

console.log(`[${new Date().toISOString()}] ⏰ Triggering GitHub workflow...`);
triggerWorkflow();