
1.  **Cài đặt Express.js:** Một framework (bộ khung) cực kỳ phổ biến giúp việc xây dựng web server bằng Node.js trở nên đơn giản và nhanh chóng hơn rất nhiều.
2.  **Khởi chạy Web Server đầu tiên:** Tạo ra một web server cơ bản có thể chạy trên máy tính của bạn và trả về dòng chữ "Hello World!".

---

### Các bước thực hiện

**Bước 1: Chuẩn bị Project (Dự án)**

Trước khi cài Express, bạn cần tạo một "ngôi nhà" cho dự án của mình.
1.  **Tạo thư mục dự án:** Mở trình quản lý file và tạo một thư mục mới cho dự án, ví dụ đặt tên là `blog`.
2.  **Mở thư mục trong VS Code:** Mở phần mềm VS Code, chọn "Add Folder" và trỏ đến thư mục `blog` bạn vừa tạo.
3.  **Khởi tạo dự án Node.js:**
    *   Mở Terminal trong VS Code (Menu -> Terminal -> New Terminal).
    *   Gõ lệnh sau và nhấn Enter:
        ```bash
        npm init
        ```
    *   Hệ thống sẽ hỏi bạn một loạt thông tin về dự án (tên, phiên bản, mô tả...). Bạn chỉ cần **nhấn Enter liên tục** để chấp nhận các giá trị mặc định. Cuối cùng, gõ `yes` và Enter để xác nhận.
    *   **Kết quả:** Lệnh này sẽ tạo ra một file tên là `package.json`. File này giống như "giấy khai sinh" của dự án, chứa các thông tin cơ bản và quan trọng nhất là sẽ quản lý các thư viện mà dự án sử dụng (gọi là *dependencies*).
4.  **Tạo file chính của ứng dụng:**
    *   Trong thư mục `blog`, tạo một file mới tên là `index.js`. Đây sẽ là file chính mà chúng ta viết code để chạy server.

**Bước 2: Cài đặt Express**

Bây giờ chúng ta sẽ cài đặt thư viện Express vào dự án.
1.  Trong cửa sổ Terminal của VS Code, gõ lệnh sau và nhấn Enter:
    ```bash
    npm install express
    ```
2.  **Điều gì xảy ra?**
    *   **npm** (Node Package Manager - Trình quản lý gói của Node) sẽ lên mạng, tìm và tải thư viện `express` về.
    *   Nó sẽ tạo ra một thư mục tên là `node_modules`. Đây là nơi chứa code của thư viện `express` và tất cả các thư viện nhỏ khác mà `express` cần để hoạt động.
    *   Nó cũng cập nhật file `package.json`, thêm `express` vào mục `dependencies` để ghi nhớ rằng dự án này cần có Express để chạy.

**Bước 3: Viết code và Chạy Web Server đầu tiên**

Đây là phần thú vị nhất!
1.  Mở file `index.js` lên và dán đoạn code sau vào (đây là code "Hello World" kinh điển của Express):

    ```javascript
    const express = require('express');
    const app = express();
    const port = 3000;

    // Định nghĩa một "tuyến đường" (route) cho trang chủ
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });

    // Lắng nghe các yêu cầu trên cổng 3000
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
    ```

2.  **Giải thích code:**
    *   **Dòng 1:** "Nạp" thư viện Express vào để sử dụng.
    *   **Dòng 2:** Tạo ra một ứng dụng web từ Express. Biến `app` từ đây sẽ đại diện cho web server của bạn.
    *   **Dòng 3:** Chọn cổng `3000` để server chạy trên đó.
    *   **Dòng 5-7:** Đây là phần quan trọng nhất. Bạn đang định nghĩa một *route*.
        *   `app.get('/')`: "Này server, khi nào có người dùng truy cập vào trang chủ (`/`) bằng phương thức **GET**..."
        *   `...thì hãy thực thi hàm này`. Hàm này nhận 2 tham số: `req` (request - thông tin yêu cầu) và `res` (response - thứ để bạn trả lời).
        *   `res.send('Hello World!')`: "...và trả lời lại cho họ bằng dòng chữ 'Hello World!'".
    *   **Dòng 10-12:** Khởi động server và cho nó bắt đầu "lắng nghe" các yêu cầu gửi đến cổng `3000`.

3.  **Chạy Server:**
    *   Quay lại Terminal, gõ lệnh sau và nhấn Enter:
        ```bash
        node index.js
        ```
    *   Bạn sẽ thấy dòng chữ "Example app listening at http://localhost:3000" hiện ra. **Chúc mừng, server của bạn đã chạy!**

4.  **Kiểm tra kết quả:**
    *   Mở trình duyệt web.
    *   Gõ vào thanh địa chỉ: `localhost:3000` và nhấn Enter.
    *   Bạn sẽ thấy dòng chữ **Hello World!** xuất hiện trên trang.

Vậy là bạn đã cài đặt thành công Express và khởi chạy được web server đầu tiên của mình