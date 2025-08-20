NodeJS và ExpressJS theo mô hình kiến trúc MVC (Model-View-Controller).

**Tổng quan về mô hình MVC**

Mô hình MVC chia một ứng dụng thành ba thành phần chính có thể kết nối với nhau.

*   **Model:** Chịu trách nhiệm quản lý dữ liệu của ứng dụng. Nó nhận đầu vào từ Controller.
*   **View:** Đảm nhận việc hiển thị dữ liệu.
*   **Controller:** Kiểm soát luồng dữ liệu vào đối tượng Model và cập nhật View bất cứ khi nào dữ liệu thay đổi. Nó giữ cho Model và View tách biệt.

**Luồng hoạt động của MVC trong ứng dụng web**

1.  **Browser:** Người dùng tương tác với giao diện người dùng (View) thông qua trình duyệt, chẳng hạn như nhấp vào một liên kết.
2.  **Web Server và Routes:** Yêu cầu từ trình duyệt được gửi đến máy chủ web. Thành phần "Routes" sẽ xác định và ánh xạ yêu cầu này đến một hành động cụ thể trong Controller.
3.  **Dispatcher:** Yêu cầu sau đó được chuyển đến "Dispatcher", có nhiệm vụ điều phối và gọi Controller tương ứng.
4.  **Controller:** Controller xử lý logic của ứng dụng. Nó có thể tương tác với Model để truy xuất hoặc cập nhật dữ liệu.
5.  **Model và Cơ sở dữ liệu:** Model làm việc trực tiếp với cơ sở dữ liệu (ví dụ: MySQL) để thực hiện các thao tác dữ liệu.
6.  **Controller và View:** Sau khi có dữ liệu từ Model, Controller sẽ chuyển dữ liệu này cho View.
7.  **View:** View sẽ hiển thị dữ liệu cho người dùng.
8.  **Phản hồi:** Cuối cùng, máy chủ web sẽ gửi phản hồi (thường là mã HTML) trở lại trình duyệt để hiển thị cho người dùng.

Để áp dụng mô hình này, người lập trình sẽ tạo các thư mục riêng biệt cho Model, View và Controller để tổ chức mã nguồn một cách rõ ràng và dễ quản lý.