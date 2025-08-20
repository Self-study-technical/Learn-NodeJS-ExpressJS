### **Xây dựng Thành phần Model**

Trọng tâm chính của video này là hướng dẫn cách xây dựng thành phần **Model** trong kiến trúc MVC. Các bước chính được đề ra bao gồm:

Mongoose là một "người phiên dịch" giữa ứng dụng Node.js của bạn và cơ sở dữ liệu MongoDB.
MongoDB vốn là một cơ sở dữ liệu "phi cấu trúc" (schemaless), nghĩa là bạn có thể lưu trữ bất cứ loại dữ liệu nào bạn muốn vào một collection. Điều này rất linh hoạt nhưng cũng có thể gây ra sự lộn xộn và không nhất quán cho dữ liệu.

1.  **Cài đặt Mongoose:** Tìm hiểu và cài đặt thư viện Mongoose, một công cụ mô hình hóa dữ liệu đối tượng (ODM) cho MongoDB và Node.js.
2.  **Kết nối với Cơ sở dữ liệu (DB):** Thiết lập kết nối từ ứng dụng Node.js đến cơ sở dữ liệu MongoDB.
3.  **Tạo Model:** Định nghĩa cấu trúc (schema) và tạo ra model để tương tác với collection trong cơ sở dữ liệu.

### **Làm quen và Thiết lập Cơ sở dữ liệu với MongoDB Compass**

Trước khi đi vào code, người hướng dẫn giới thiệu cách sử dụng **MongoDB Compass**, một công cụ giao diện đồ họa để quản lý MongoDB.

*   **Kết nối:** Hướng dẫn kết nối đến server MongoDB cục bộ (localhost).
*   **Tạo Cơ sở dữ liệu và Collection:**
    *   Tạo một cơ sở dữ liệu mới có tên là `f8_education_dev`.
    *   Trong cơ sở dữ liệu đó, tạo một collection (tương đương với "bảng" trong cơ sở dữ liệu quan hệ) có tên là `courses` để lưu trữ thông tin về các khóa học.
*   **Thêm dữ liệu (Document):** Hướng dẫn thêm một bản ghi mới (document) vào collection `courses` với các trường dữ liệu như `name` (tên khóa học), `description` (mô tả), và `image` (hình ảnh).

### **Cài đặt và Sử dụng Mongoose**

Phần tiếp theo tập trung vào việc tích hợp Mongoose vào dự án.

*   **Cài đặt:** Chạy lệnh `npm install mongoose` để cài đặt thư viện.
*   **Tạo file cấu hình kết nối:** Tạo một file mới tại `src/config/db/index.js` để quản lý việc kết nối đến cơ sở dữ liệu.
*   **Viết hàm kết nối:** Trong file vừa tạo, viết một hàm `connect` sử dụng `mongoose.connect()` để kết nối đến cơ sở dữ liệu `f8_education_dev` đã tạo trước đó. Hàm này cũng xử lý và thông báo kết nối thành công hoặc thất bại.
*   **Gọi hàm kết nối:** Import và gọi hàm `connect` trong file `index.js` chính của dự án.

### **Tạo Model và Tương tác với Dữ liệu**

Đây là phần cốt lõi của video, hướng dẫn cách tạo và sử dụng model.

*   **Tạo file Model:** Tạo một thư mục `models` trong `src/app` và tạo file `Course.js` bên trong.
*   **Định nghĩa Schema:** Sử dụng `mongoose.Schema` để định nghĩa cấu trúc dữ liệu cho một khóa học, bao gồm các trường:
    *   `name`: Kiểu `String`, giới hạn độ dài tối đa 255 ký tự.
    *   `description`: Kiểu `String`, giới hạn độ dài tối đa 600 ký tự.
    *   `image`: Kiểu `String`, giới hạn độ dài tối đa 255 ký tự.
    *   `createdAt` và `updatedAt`: Kiểu `Date`, với giá trị mặc định là thời điểm hiện tại.
*   **Tạo Model:** Sử dụng `mongoose.model('Course', CourseSchema)` để tạo ra model từ schema đã định nghĩa.
*   **Tương tác từ Controller:**
    *   Trong `SiteController.js`, import model `Course` vừa tạo.
    *   Sử dụng phương thức `Course.find({})` để truy vấn và lấy tất cả các bản ghi (khóa học) từ collection `courses`.
    *   Thay vì render ra giao diện, người hướng dẫn tạm thời trả về dữ liệu dưới dạng JSON bằng `res.json(courses)` để kiểm tra kết quả.

Kết quả cuối cùng cho thấy dữ liệu từ MongoDB đã được truy vấn thành công thông qua model và trả về cho trình duyệt, hoàn thành luồng tương tác cơ bản: **Controller -> Model -> Database -> Controller -> Client**.