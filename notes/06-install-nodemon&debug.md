Hướng dẫn hai công cụ cực kỳ hữu ích cho việc phát triển ứng dụng Node.js là **Nodemon** (lắng nghe file thay đổi) và cách sử dụng nó để **Debug** (gỡ lỗi).

### 1. Vấn đề cốt lõi khi phát triển Node.js (Minh họa thực tế)

*   **Vấn đề:** Người hướng dẫn bắt đầu bằng cách chỉ ra một sự bất tiện lớn khi lập trình Node.js. Mỗi khi bạn thay đổi dù chỉ một dòng code trong tệp JavaScript (ví dụ: sửa đường dẫn từ `/trang-chu` thành `/`), máy chủ (server) đang chạy sẽ không tự động cập nhật thay đổi đó.
*   **Thao tác thủ công:** Để thấy được thay đổi, bạn buộc phải làm thủ công:
    1.  Vào cửa sổ Terminal.
    2.  Dừng server đang chạy bằng tổ hợp phím `Ctrl + C`.
    3.  Khởi động lại server bằng lệnh `node index.js`.
*   **Kết luận:** Quá trình này lặp đi lặp lại rất nhiều lần, gây mất thời gian và làm gián đoạn luồng công việc.

### 2. Giới thiệu Nodemon - Giải pháp cho vấn đề

*   **Công dụng chính:** Nodemon được tạo ra để giải quyết chính xác vấn đề trên. Nó là một công cụ sẽ "lắng nghe" hay "theo dõi" mọi sự thay đổi trong các tệp mã nguồn của dự án.
*   **Tự động hóa:** Khi bạn lưu một tệp đã chỉnh sửa, Nodemon sẽ tự động khởi động lại server cho bạn. Bạn không cần phải làm thao tác thủ công `Ctrl + C` và chạy lại lệnh nữa.
*   **Phổ biến:** Đây là một thư viện rất phổ biến, được hàng triệu lượt tải mỗi tuần, chứng tỏ sự hữu ích của nó.

### 3. Hướng dẫn cài đặt Nodemon

Người hướng dẫn chỉ ra hai cách cài đặt nhưng khuyến khích cách thứ hai:

1.  **Cài đặt Toàn cục (Global):** `npm install -g nodemon`. Cách này sẽ cài Nodemon cho toàn bộ máy tính, nhưng không phải là cách làm tốt nhất cho từng dự án cụ thể.
2.  **Cài đặt làm Phụ thuộc Phát triển (Dev Dependency - Khuyến khích):**
    *   **Lệnh:** `npm install nodemon --save-dev` (hoặc viết tắt: `npm i nodemon --save-dev`).
    *   **Ý nghĩa:** Lệnh này cài Nodemon chỉ cho dự án hiện tại và ghi nó vào mục `devDependencies` trong tệp `package.json`. Điều này hợp lý vì bạn chỉ cần Nodemon trong quá trình phát triển (development), chứ không cần khi ứng dụng đã chạy thật trên server sản phẩm (production).

### 4. Hướng dẫn sử dụng Nodemon (Cách hiệu quả)

Thay vì chạy lệnh `nodemon index.js` trực tiếp, cách làm chuyên nghiệp hơn là thông qua **npm scripts**.

1.  Mở tệp `package.json`.
2.  Tìm đến mục `"scripts"`.
3.  Thêm một dòng mới: `"start": "nodemon index.js"`.
4.  Từ bây giờ, để khởi động server với Nodemon, bạn chỉ cần gõ lệnh đơn giản trong Terminal: `npm start`.

Khi bạn chạy `npm start`, Nodemon sẽ khởi động server và bắt đầu theo dõi các tệp. Bất cứ khi nào bạn lưu một tệp, cửa sổ Terminal sẽ tự động hiển thị thông báo "restarting due to changes..." và server sẽ được làm mới ngay lập tức.

### 5. Giới thiệu tính năng Debug

Đây là phần nâng cao nhưng rất mạnh mẽ. Nodemon giúp việc gỡ lỗi phía server trở nên dễ dàng như gỡ lỗi JavaScript trên trình duyệt.

1.  **Kích hoạt chế độ Debug:**
    *   Sửa lại script "start" trong `package.json` thành: `"start": "nodemon --inspect index.js"`.
    *   Chạy lại `npm start`. Terminal sẽ báo "Debugger listening...".

2.  **Gỡ lỗi trên Chrome:**
    *   Mở trang web của bạn trên Chrome (ví dụ: `localhost:3000`).
    *   Mở **Chrome DevTools** (Nhấn F12 hoặc chuột phải -> Inspect).
    *   Bạn sẽ thấy một **biểu tượng Node.js màu xanh lá cây** xuất hiện.
    *   Nhấp vào biểu tượng đó, một cửa sổ DevTools mới dành riêng cho Node.js sẽ hiện ra.

3.  **Sử dụng công cụ gỡ lỗi:**
    *   Trong cửa sổ mới, vào tab `Sources`. Bạn sẽ thấy toàn bộ mã nguồn phía server của mình.
    *   **Đặt điểm ngắt (Breakpoint):** Bạn có thể nhấp vào số dòng bất kỳ để đặt một điểm ngắt. Khi code chạy đến dòng đó, nó sẽ tạm dừng lại.
    *   **Kiểm tra biến:** Khi chương trình tạm dừng, bạn có thể di chuột qua các biến (như `req`, `res`, `a`, `b`...) để xem giá trị hiện tại của chúng là gì.
    *   **Chạy từng bước:** Bạn có thể sử dụng các nút điều khiển để chạy từng dòng lệnh một, giúp theo dõi chính xác luồng hoạt động của chương trình và tìm ra lỗi.

**Tóm lại, video này hướng dẫn cách dùng Nodemon để:**
1.  **Tự động hóa** việc khởi động lại server, giúp tăng tốc độ lập trình.
2.  **Kích hoạt chế độ gỡ lỗi mạnh mẽ**, cho phép bạn đặt breakpoint và kiểm tra các biến phía server một cách trực quan, giúp tìm và sửa lỗi hiệu quả hơn rất nhiều so với việc chỉ dùng `console.log()`.
