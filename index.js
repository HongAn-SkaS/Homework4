const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 1. Trang chủ trả về Giao diện HTML mượt mà
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express RESTful API</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #0f172a;
          color: #f8fafc;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
        }
        .card {
          background-color: #1e293b;
          padding: 30px;
          border-radius: 12px;
          border: 1px solid #334155;
          max-width: 500px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
        }
        h1 { color: #38bdf8; margin-top: 0; }
        .status {
          display: inline-block;
          background-color: #22c55e;
          color: #000;
          padding: 4px 10px;
          border-radius: 12px;
          font-weight: bold;
          font-size: 0.85rem;
        }
        code {
          background-color: #0f172a;
          color: #f43f5e;
          padding: 3px 6px;
          border-radius: 4px;
        }
        ul { padding-left: 20px; }
        li { margin-bottom: 8px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Node.js Express API <span class="status">ONLINE</span></h1>
        <p>Máy chủ RESTful API đang hoạt động bình thường trên <strong>Render</strong>!</p>
        <hr style="border-color: #334155; margin: 20px 0;">
        <h3>Các Endpoint có sẵn:</h3>
        <ul>
          <li><code>GET /api/hello</code> - Lấy thông điệp chào mừng (JSON)</li>
          <li><code>GET /api/status</code> - Kiểm tra trạng thái Server</li>
        </ul>
      </div>
    </body>
    </html>
  `);
});

// 2. RESTful API Endpoints (Trả về dữ liệu JSON)
app.get('/api/hello', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello World from Express API!',
    timestamp: new Date()
  });
});

app.get('/api/status', (req, res) => {
  res.json({
    uptime: process.uptime(),
    message: 'Server đang chạy mượt mà',
    platform: 'Render'
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại port ${PORT}`);
});