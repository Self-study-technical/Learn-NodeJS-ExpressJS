### Chủ đề chính: Giới thiệu và Sử dụng Morgan để Ghi Log (Logging) HTTP Request

**Morgan**, một thư viện middleware cho Node.js, với công dụng chính là ghi lại thông tin chi tiết về các yêu cầu HTTP (HTTP requests) gửi đến máy chủ của bạn.

### 1. Vấn đề được đặt ra

*   Người hướng dẫn chỉ ra rằng, khi bạn phát triển một ứng dụng web, trình duyệt của người dùng liên tục gửi các yêu cầu (request) đến máy chủ của bạn.
*   Tuy nhiên, trong cửa sổ Terminal nơi bạn chạy server Node.js, bạn **không thấy bất kỳ thông tin gì** về những yêu cầu này. Bạn không biết:
    *   Có yêu cầu nào vừa được gửi đến không?
    *   Yêu cầu đó đến từ đâu (địa chỉ IP nào)?
    *   Nó yêu cầu truy cập vào đường dẫn (path) nào?
    *   Phương thức là gì (GET, POST, ...)?
    *   Kết quả trả về (status code) là thành công (200) hay lỗi (404, 500)?
*   Sự thiếu thông tin này gây khó khăn lớn cho việc theo dõi hoạt động và đặc biệt là gỡ lỗi (debug).

### 2. Giới thiệu Morgan - Giải pháp Logging

*   **Morgan là gì?** Nó là một "HTTP request logger middleware". "Middleware" là một khái niệm quan trọng trong Express.js, có thể hiểu nôm na là một "phần mềm trung gian" nằm giữa lúc server nhận được request và trước khi gửi đi response. Nhiệm vụ của nó là thực hiện một công việc nào đó, trong trường hợp này là **ghi lại thông tin request**.
*   **Lợi ích:** Bằng cách sử dụng Morgan, mỗi khi có một request được gửi tới, thông tin về nó sẽ được tự động in ra cửa sổ Terminal, giúp bạn dễ dàng quan sát và gỡ lỗi.

### 3. Hướng dẫn Cài đặt

*   Người hướng dẫn thực hiện các bước sau:
    1.  Tìm kiếm "npm morgan" trên Google để vào trang tài liệu chính thức của thư viện trên npmjs.com.
    2.  Nhấn mạnh rằng Morgan là một công cụ chỉ cần thiết trong quá trình phát triển (development). Do đó, nên cài nó dưới dạng một "phụ thuộc phát triển" (dev dependency).
    3.  Thực thi lệnh cài đặt trong Terminal:
        ```bash
        npm install morgan --save-dev
        ```
        *(Hoặc viết tắt là `npm i morgan --save-dev`)*
    4.  Sau khi cài đặt xong, tệp `package.json` sẽ được cập nhật và có thêm `morgan` trong mục `devDependencies`.

### 4. Hướng dẫn Tích hợp và Sử dụng

1.  **Require thư viện:** Trong tệp `index.js` (hoặc tệp chính của server), bạn cần import thư viện vào:
    ```javascript
    const morgan = require('morgan');
    ```
2.  **Sử dụng Middleware:** Dùng phương thức `app.use()` của Express để tích hợp Morgan. Lệnh này phải được đặt trước các định tuyến (route) của bạn:
    ```javascript
    app.use(morgan('combined'));
    ```
3.  **Giải thích `combined`:**`'combined'` là một trong những định dạng log có sẵn của Morgan. Đây là định dạng tiêu chuẩn của Apache, cung cấp thông tin rất chi tiết.

### 5. Kết quả và Phân tích Log

*   Sau khi lưu lại tệp `index.js`, Nodemon tự động khởi động lại server.
*   Bây giờ, mỗi khi người hướng dẫn làm mới (refresh) trang web trên trình duyệt, một dòng log mới sẽ xuất hiện trong Terminal.
*   Người hướng dẫn giải thích chi tiết ý nghĩa của các thông tin trong dòng log đó, bao gồm:
    *   Địa chỉ IP của client.
    *   Thời gian request.
    *   Phương thức HTTP (GET).
    *   Đường dẫn được yêu cầu (`/`).
    *   Phiên bản HTTP.
    *   Mã trạng thái phản hồi (Status Code), ví dụ: `304` (Not Modified).
    *   Thông tin về trình duyệt và hệ điều hành của người dùng (User-Agent).