**Server-side rendering** và **Client-side rendering**.

Hãy tưởng tượng "render" (kết xuất) là quá trình "vẽ" ra trang web mà bạn nhìn thấy. Video này giải thích về **hai cách "vẽ" khác nhau**.

### 1. Server-side rendering (SSR) - Kết xuất phía máy chủ

Đây là cách hoạt động của các trang web truyền thống, ví dụ như trang báo Dân Trí được đề cập trong video.

*   **Quy trình:**
    1.  Bạn yêu cầu xem một trang web (ví dụ: một bài báo).
    2.  **Máy chủ (Server)** nhận yêu cầu và làm hết mọi việc: nó lấy nội dung bài báo, hình ảnh, v.v., và "lắp ráp" thành một trang HTML hoàn chỉnh.
    3.  Sau đó, nó gửi trang HTML hoàn chỉnh này về cho trình duyệt của bạn.
    4.  Trình duyệt của bạn chỉ việc hiển thị trang HTML đã được làm sẵn đó.

*   **Ưu điểm:**
    *   **Tốt cho SEO (Tối ưu hóa công cụ tìm kiếm):** Vì nội dung đã có sẵn trong HTML, các công cụ tìm kiếm như Google có thể dễ dàng đọc và hiểu trang web của bạn, giúp tăng thứ hạng tìm kiếm.
    *   **Tải lần đầu nhanh:** Người dùng nhìn thấy nội dung trang web gần như ngay lập tức vì không phải chờ xử lý gì thêm.

*   **Nhược điểm:**
    *   **Trải nghiệm chuyển trang không mượt:** Mỗi khi bạn bấm vào một liên kết khác, trình duyệt phải gửi một yêu cầu mới hoàn toàn và tải lại cả một trang HTML mới. Bạn sẽ thấy trang web bị "chớp" một cái khi tải lại.

### 2. Client-side rendering (CSR) - Kết xuất phía người dùng (trình duyệt)

Đây là cách hoạt động của các ứng dụng web hiện đại (Single Page Application - SPA), ví dụ như trang F8 và các trang được xây dựng bằng ReactJS, Angular, VueJS.

*   **Quy trình:**
    1.  Bạn yêu cầu xem một trang web.
    2.  **Máy chủ (Server)** chỉ gửi về một "bộ khung" HTML rất trống rỗng, kèm theo một file JavaScript lớn.
    3.  **Trình duyệt của bạn (Client)** nhận bộ khung và file JavaScript đó.
    4.  Chính JavaScript chạy trên trình duyệt của bạn sẽ tự đi lấy dữ liệu cần thiết và "vẽ" toàn bộ nội dung lên "bộ khung" HTML trống rỗng ban đầu.

*   **Ưu điểm:**
    *   **Trải nghiệm người dùng mượt mà:** Sau lần tải đầu tiên, khi bạn chuyển trang, trang web không cần tải lại toàn bộ. JavaScript sẽ chỉ lấy dữ liệu mới và cập nhật lại đúng phần nội dung cần thay đổi. Cảm giác giống như bạn đang dùng một ứng dụng trên máy tính chứ không phải một trang web.

*   **Nhược điểm:**
    *   **Không tốt cho SEO (một cách truyền thống):** Vì file HTML ban đầu trống rỗng, công cụ tìm kiếm có thể gặp khó khăn trong việc đọc nội dung.
    *   **Tải lần đầu chậm hơn:** Người dùng phải chờ tải cả file JavaScript, sau đó chờ JavaScript chạy xong mới thấy được nội dung, có thể gây ra cảm giác "màn hình trắng" trong giây lát.


### Tóm lại 

| Tiêu chí | Server-side rendering (SSR) | Client-side rendering (CSR) |
| :--- | :--- | :--- |
| **Nơi "vẽ" trang web** | Tại **Máy chủ (Server)** | Tại **Trình duyệt của bạn (Client)** |
| **Tốc độ tải lần đầu** | Nhanh | Chậm hơn |
| **Trải nghiệm chuyển trang** | Chậm, phải tải lại toàn bộ | Nhanh và mượt |
| **Thân thiện với SEO** | Rất tốt | Kém hơn |
| **Ví dụ** | Trang tin tức, blog | Mạng xã hội, các trang quản trị (dashboard) |
