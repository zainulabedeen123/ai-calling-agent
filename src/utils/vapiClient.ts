// src/utils/vapiClient.ts
import axios from 'axios';

const vapiClient = axios.create({
  baseURL: 'https://api.vapi.ai',
  headers: {
    Authorization: `Bearer ${process.env.VAPI_TOKEN}`,
  },
});

export default vapiClient;
