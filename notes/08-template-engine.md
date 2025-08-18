Giải thích về "Template engines" và cách sử dụng "Handlebars" trong Node.js.

### Chủ đề chính: Giới thiệu Template Engines và Hướng dẫn sử dụng Handlebars

Video này giải thích Template Engines là gì và tại sao chúng cần thiết, sau đó hướng dẫn chi tiết cách tích hợp và sử dụng **Handlebars** (thông qua thư viện `express-handlebars`) để quản lý giao diện (view) trong một ứng dụng Express.js.

### 1. Vấn đề cần giải quyết

*   **Viết HTML trong JavaScript rất bất tiện:** Người hướng dẫn chỉ ra rằng việc viết trực tiếp các chuỗi HTML dài, phức tạp bên trong hàm `res.send()` trong các tệp JavaScript là một việc rất khó quản lý, dễ gây lỗi và không thể mở rộng khi website lớn dần.
*   **Ví dụ thực tế:** Nếu phải xây dựng một trang web hoàn chỉnh như trang của F8, việc nhúng toàn bộ mã HTML của trang vào một chuỗi JavaScript là điều không tưởng.

### 2. Template Engines là gì?

*   **Định nghĩa:** Template Engines (công cụ mẫu) là các thư viện giúp tách biệt logic xử lý của ứng dụng (trong các tệp `.js`) ra khỏi phần mã giao diện (trong các tệp template, ví dụ: `.handlebars`, `.pug`).
*   **Cách hoạt động:**
    1.  Bạn viết mã HTML trong các tệp riêng biệt (gọi là các "view" hoặc "template").
    2.  Trong các tệp này, bạn có thể sử dụng các cú pháp đặc biệt để chèn dữ liệu động từ server vào.
    3.  Từ server Node.js, bạn gọi một hàm (ví dụ: `res.render()`) để "kết xuất" (render) tệp template đó, truyền dữ liệu vào.
    4.  Template Engine sẽ đọc tệp template, thay thế các cú pháp đặc biệt bằng dữ liệu thật, và tạo ra một file HTML hoàn chỉnh để gửi về cho trình duyệt.

### 3. Hướng dẫn cài đặt và cấu hình `express-handlebars`

1.  **Cài đặt:**
    *   Tìm kiếm "express handlebars" trên Google để vào trang npm.
    *   Thực hiện cài đặt bằng lệnh: `npm install express-handlebars`.

2.  **Tổ chức lại cấu trúc thư mục (Refactor):**
    *   Tạo thư mục `src` ở gốc dự án.
    *   Di chuyển tệp `index.js` vào trong `src`.
    *   Tạo thư mục `resources` bên trong `src`.
    *   Tạo thư mục `views` bên trong `resources`. Đây là nơi sẽ chứa tất cả các tệp giao diện.

3.  **Cập nhật `package.json`:**
    *   Sửa lại đường dẫn tệp chính: `"main": "src/index.js"`.
    *   Sửa lại script "start" để Nodemon theo dõi đúng tệp: `"start": "nodemon src/index.js"`.

4.  **Cấu hình trong `index.js`:**
    *   **Import:** `const handlebars = require('express-handlebars');`
    *   **Định nghĩa đường dẫn:** Cần sử dụng module `path` có sẵn của Node.js để tạo đường dẫn tuyệt đối đến thư mục `views`:
        ```javascript
        const path = require('path');
        app.set('views', path.join(__dirname, 'resources/views'));
        ```
    *   **Sử dụng Template Engine:** Khai báo cho Express biết rằng bạn sẽ sử dụng `handlebars` làm công cụ view:
        ```javascript
        app.engine('handlebars', handlebars());
        app.set('view engine', 'handlebars');
        ```

### 4. Các khái niệm chính của Handlebars: Layouts, Views và Partials

*   **Layouts (Bố cục chính):**
    *   Là một file template (`main.handlebars`) chứa cấu trúc HTML chung cho toàn bộ trang web (thẻ `<html>`, `<head>`, `<body>`, header, footer...).
    *   Nó có một placeholder đặc biệt là `{{{body}}}`. Đây là nơi nội dung của từng trang cụ thể sẽ được chèn vào.

*   **Views (Các trang con):**
    *   Là các tệp template tương ứng với từng trang (ví dụ: `home.handlebars`, `news.handlebars`).
    *   Các tệp này chỉ chứa phần nội dung độc nhất của trang đó.
    *   Khi bạn `render` một view (ví dụ `res.render('home')`), nội dung của `home.handlebars` sẽ được đưa vào vị trí `{{{body}}}` của layout chính.

*   **Partials (Các thành phần tái sử dụng):**
    *   Là những mẩu HTML nhỏ có thể tái sử dụng ở nhiều nơi (ví dụ: `header.handlebars`, `footer.handlebars`).
    *   Bạn tạo một thư mục `partials` trong `views`.
    *   Để nhúng một partial vào layout hoặc view, bạn sử dụng cú pháp: `{{> header}}`.

### 5. Thực hành

Video đã thực hiện các bước sau để minh họa:

1.  Tạo thư mục `resources/views/layouts` và file `main.handlebars` bên trong.
2.  Tạo file `home.handlebars` và `news.handlebars` trong `resources/views`.
3.  Tạo thư mục `resources/views/partials` và các file `header.handlebars`, `footer.handlebars`.
4.  Trong `main.handlebars`, xây dựng cấu trúc HTML cơ bản và nhúng header, footer, body vào đúng vị trí.
5.  Trong `index.js`, sửa các route để sử dụng `res.render('home')` và `res.render('news')` thay vì `res.send()`.

Kết quả là ứng dụng đã có thể render các trang HTML hoàn chỉnh, với code được tổ chức gọn gàng, dễ bảo trì và mở rộng.