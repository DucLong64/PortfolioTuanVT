export interface Assignment {
  id: string;
  title: string;
  subject: string;
  tools: string[];
  summary: string;
  sections: {
    title: string;
    detail: string;
  }[];
  driveLink: string;
  pdfEmbedLink: string;
}

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Xây dựng Website Thương Mại Điện Tử",
    subject: "Lập trình Web",
    tools: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    summary:
      "Thiết kế và xây dựng một website bán hàng trực tuyến hoàn chỉnh với đầy đủ chức năng quản lý sản phẩm, giỏ hàng và thanh toán.",
    sections: [
      {
        title: "I. Phân tích yêu cầu",
        detail:
          "Phân tích các yêu cầu chức năng và phi chức năng của hệ thống thương mại điện tử. Xác định đối tượng người dùng mục tiêu, luồng nghiệp vụ chính (duyệt sản phẩm → thêm giỏ hàng → thanh toán → xác nhận đơn), và các ràng buộc kỹ thuật. Sử dụng phương pháp phân tích Use Case và User Story để đặc tả yêu cầu.",
      },
      {
        title: "II. Thiết kế giao diện (UI/UX)",
        detail:
          "Thiết kế wireframe và mockup bằng Figma cho các trang chính: Trang chủ, Danh sách sản phẩm, Chi tiết sản phẩm, Giỏ hàng, và Thanh toán. Áp dụng nguyên tắc thiết kế Material Design, đảm bảo responsive trên mobile và desktop. Thực hiện usability testing với 5 người dùng thử nghiệm.",
      },
      {
        title: "III. Cài đặt Frontend",
        detail:
          "Xây dựng giao diện bằng React 18 với TypeScript. Quản lý state toàn cục bằng Redux Toolkit. Tích hợp React Router cho điều hướng. Sử dụng Tailwind CSS cho styling. Các component chính: ProductCard, CartDrawer, CheckoutForm, OrderSummary. Tối ưu hiệu năng với lazy loading và code splitting.",
      },
      {
        title: "IV. Cài đặt Backend & API",
        detail:
          "Xây dựng RESTful API bằng Node.js và Express.js. Thiết kế cơ sở dữ liệu MySQL với các bảng: users, products, categories, orders, order_items. Tích hợp JWT cho xác thực người dùng. Cài đặt middleware xử lý lỗi, validate dữ liệu bằng Joi, và rate limiting để bảo mật.",
      },
      {
        title: "V. Kiểm thử & Triển khai",
        detail:
          "Viết unit test cho các API endpoint bằng Jest và Supertest (coverage >80%). Thực hiện integration test luồng mua hàng end-to-end. Triển khai frontend lên Vercel và backend lên Railway. Cấu hình CI/CD với GitHub Actions để tự động deploy khi merge vào nhánh main.",
      },
      {
        title: "VI. Kết quả & Đánh giá",
        detail:
          "Website hoàn thiện với 15+ trang, hỗ trợ 50+ sản phẩm. Tốc độ tải trang đạt điểm Lighthouse 90+. Giao diện responsive hoàn toàn. Hệ thống xử lý được ~100 đơn hàng đồng thời trong môi trường test. Nhận xét từ giảng viên: 'Thiết kế chuyên nghiệp, code sạch, có tư duy hệ thống tốt.'",
      },
    ],
    driveLink: "https://drive.google.com/file/d/example1",
    pdfEmbedLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUFqHdgGc/preview",
  },
  {
    id: "2",
    title: "Phân tích Dữ liệu Khảo sát Sinh viên",
    subject: "Xử lý & Phân tích Dữ liệu",
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    summary:
      "Thu thập và phân tích dữ liệu khảo sát về thói quen học tập của 200 sinh viên trong trường, tìm ra các yếu tố ảnh hưởng đến kết quả học tập.",
    sections: [
      {
        title: "I. Thu thập dữ liệu",
        detail:
          "Thiết kế bảng khảo sát 25 câu hỏi trên Google Forms, phân phối qua các kênh mạng xã hội và email sinh viên. Thu thập được 213 phản hồi hợp lệ trong 2 tuần. Dữ liệu bao gồm: thông tin nhân khẩu học, thời gian học, phương pháp học, sử dụng công nghệ, và GPA tự báo cáo.",
      },
      {
        title: "II. Làm sạch & Tiền xử lý",
        detail:
          "Xử lý missing values (chiếm 3.2% tổng dữ liệu) bằng phương pháp mean imputation và median imputation tùy loại biến. Phát hiện và loại 13 outlier bằng IQR method. Chuẩn hóa dữ liệu số, mã hóa biến phân loại bằng Label Encoding và One-Hot Encoding.",
      },
      {
        title: "III. Phân tích thống kê mô tả",
        detail:
          "Tính toán các chỉ số thống kê cơ bản: mean, median, mode, standard deviation cho từng biến. Vẽ histogram, box plot, và bar chart để trực quan hóa phân phối dữ liệu. Phát hiện 68% sinh viên học dưới 4 giờ/ngày, GPA trung bình đạt 2.9/4.0.",
      },
      {
        title: "IV. Phân tích tương quan",
        detail:
          "Tính ma trận tương quan Pearson giữa các biến số. Sử dụng heatmap để trực quan hóa. Phát hiện tương quan dương mạnh (r=0.72) giữa thời gian tự học và GPA. Tương quan âm (r=-0.58) giữa thời gian mạng xã hội và GPA. Kiểm định ý nghĩa thống kê với p-value < 0.05.",
      },
      {
        title: "V. Kết quả & Khuyến nghị",
        detail:
          "Yếu tố quan trọng nhất ảnh hưởng GPA: (1) Số giờ tự học/ngày, (2) Chất lượng ngủ, (3) Tham gia nhóm học. Đề xuất nhà trường tổ chức workshop về kỹ năng quản lý thời gian và tạo không gian học tập yên tĩnh sau 22h. Báo cáo được trình bày tại seminar khoa, nhận phản hồi tích cực từ Ban giám hiệu.",
      },
    ],
    driveLink: "https://drive.google.com/file/d/example2",
    pdfEmbedLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUFqHdgGc/preview",
  },
  {
    id: "3",
    title: "Đề án Nghiên cứu Thị trường Ứng dụng Di động",
    subject: "Marketing Căn bản",
    tools: ["Google Forms", "Excel", "Power BI", "Canva"],
    summary:
      "Nghiên cứu hành vi người dùng ứng dụng di động tại Việt Nam, tập trung vào phân khúc Gen Z, nhằm đề xuất chiến lược marketing cho startup fintech.",
    sections: [
      {
        title: "I. Bối cảnh & Mục tiêu",
        detail:
          "Thị trường fintech Việt Nam tăng trưởng 22% YoY (2023), với 72% người dùng là Gen Z và Millennials. Mục tiêu nghiên cứu: (1) Hiểu động cơ và rào cản khi dùng ứng dụng tài chính, (2) Xác định USP hấp dẫn nhất với Gen Z, (3) Đề xuất kênh marketing và thông điệp phù hợp.",
      },
      {
        title: "II. Phương pháp nghiên cứu",
        detail:
          "Kết hợp nghiên cứu định tính (6 focus group, mỗi nhóm 8 người) và định lượng (khảo sát 350 người). Sampling: quota sampling theo độ tuổi (18-24: 60%, 25-30: 40%) và giới tính (50/50). Thời gian thực hiện: 6 tuần. Xử lý số liệu bằng SPSS và Power BI.",
      },
      {
        title: "III. Phát hiện chính",
        detail:
          "Top 3 tính năng Gen Z quan tâm: (1) Cashback và ưu đãi (87%), (2) Giao diện đẹp/dễ dùng (79%), (3) Bảo mật minh bạch (71%). Rào cản chính: lo ngại bảo mật (64%) và thói quen dùng tiền mặt (41%). KOL micro-influencer (10K-100K followers) hiệu quả hơn mega-influencer với chi phí thấp hơn 8 lần.",
      },
      {
        title: "IV. Chiến lược đề xuất",
        detail:
          "Định vị thương hiệu: 'Tài chính thông minh cho thế hệ số'. Kênh ưu tiên: TikTok (reach Gen Z) + Zalo (tăng trust). Creative strategy: Edutainment content về quản lý tài chính cá nhân. Referral program với cashback 50K/lần giới thiệu. Budget phân bổ: 40% Digital Ads, 35% Influencer, 25% Events & Community.",
      },
      {
        title: "V. Kế hoạch triển khai & KPIs",
        detail:
          "Phase 1 (tháng 1-3): Brand awareness, mục tiêu 500K impressions/tháng. Phase 2 (tháng 4-6): Acquisition, mục tiêu 10,000 app downloads. Phase 3 (tháng 7-12): Retention, mục tiêu MAU > 60%. KPIs theo dõi: CAC < 50K VND, Day-30 retention > 40%, NPS > 50.",
      },
    ],
    driveLink: "https://drive.google.com/file/d/example3",
    pdfEmbedLink: "https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUFqHdgGc/preview",
  },
];
