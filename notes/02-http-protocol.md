# Chào bạn, để bạn có thể nắm vững kiến thức cốt lõi từ video, mình sẽ tóm tắt lại một cách chi tiết và dễ hiểu nhất nhé. Hãy hình dung toàn bộ quá trình này giống như bạn đang gửi thư và nhận thư qua bưu điện vậy.

## 1. HTTP là gì?

HTTP (Hypertext Transfer Protocol) là một giao thức truyền tải siêu văn bản, nền tảng của World Wide Web. Nó được sử dụng để truyền tải dữ liệu giữa máy khách (như trình duyệt web) và máy chủ web, cho phép người dùng truy cập các trang web, tải xuống tệp, xem hình ảnh, video

## 2. Quy trình hoạt động khi bạn truy cập một trang web

### HTTP hoạt động như thế nào?

**Yêu cầu (Request):**  
Khi bạn nhập một địa chỉ web vào trình duyệt, trình duyệt sẽ gửi một yêu cầu HTTP đến máy chủ web.

**Phản hồi (Response):**  
Máy chủ web nhận yêu cầu và gửi lại một phản hồi HTTP chứa dữ liệu của trang web (ví dụ: HTML, hình ảnh, video).

**Trình duyệt của bạn nhận và "dịch" phản hồi**  
Nó bắt đầu đọc và "dịch" các mã này để hiển thị ra trang web đẹp đẽ, có hình ảnh, chữ viết, nút bấm... mà bạn thấy trên màn hình.

---

**Tóm lại:**  
Client gửi Request -> Server nhận -> Server gửi Response -> Client nhận và hiển thị.  
Cặp "Request - Response" này là trái tim của giao tiếp trên web.
Client-server:
HTTP hoạt động theo mô hình client-server, trong đó trình duyệt (client) gửi yêu cầu và máy chủ (server) phản hồi. 

3. Các khái niệm quan trọng cần nhớ

a. Các phương thức HTTP (HTTP Methods):
Mỗi yêu cầu (Request) đều có một "mục đích" riêng, được gọi là phương thức. Video có đề cập đến 2 loại quan trọng nhất:

GET: Dùng để LẤY dữ liệu về. Khi bạn truy cập một trang web, trình duyệt của bạn dùng phương thức GET để yêu cầu nội dung trang đó.

POST: Dùng để GỬI dữ liệu lên. Khi bạn điền vào form đăng nhập, đăng ký, hoặc bình luận và nhấn nút gửi, trình duyệt sẽ dùng phương thức POST để đẩy thông tin bạn vừa nhập lên máy chủ.

b. Mã trạng thái HTTP (HTTP Status Code):
Mỗi phản hồi (Response) từ server đều đi kèm một con số để thông báo nhanh về "tình trạng" của yêu cầu.

Đầu 2xx (ví dụ: 200 OK): Yêu cầu thành công! Server đã xử lý và gửi lại nội dung bạn muốn.

Đầu 3xx (ví dụ: 304 Not Modified): Chuyển hướng hoặc nội dung không có gì thay đổi so với lần bạn xem trước. Trình duyệt có thể dùng lại bản đã lưu để tải nhanh hơn.

Đầu 4xx (ví dụ: 404 Not Found): Lỗi từ phía Client (phía bạn)! Bạn đã yêu cầu một trang không tồn tại.

Đầu 5xx (ví dụ: 500 Internal Server Error): Lỗi từ phía Server! Máy chủ đã gặp sự cố khi xử lý yêu cầu của bạn.

**Phân biệt HTTP và HTTPS:**
# HTTP:
Giao thức truyền tải dữ liệu không mã hóa, dễ bị tấn công và đánh cắp thông tin.
# HTTPS:
Giao thức HTTP an toàn, sử dụng mã hóa SSL/TLS để bảo vệ dữ liệu truyền tải. 