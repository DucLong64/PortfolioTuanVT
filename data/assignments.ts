export interface AssignmentStep {
  title: string;
  detail: string;
}

export interface AssignmentSection {
  title: string;
  detail?: string;
  subtitle?: string;
  expandLabel?: string;
  steps?: AssignmentStep[];
}

export interface Assignment {
  id: string;
  title: string;
  subject: string;
  tools: string[];
  summary: string;
  sections: AssignmentSection[];
  driveLink: string;
  pdfEmbedLink: string;
}

export const assignments: Assignment[] = [
  {
    id: "1",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    subject: "Tin học đại cương",
    tools: ["Windows", "File Explorer"],
    summary:
      "Thực hành 12 bước thao tác cơ bản trên File Explorer: tạo thư mục ThucHanh_VuAnhTuan, quản lý tệp tin, sao chép, di chuyển, xóa và khôi phục từ Thùng rác.",
    sections: [
      {
        title: "Các bước thực hiện",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Mở File Explorer",
            detail:
              "Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
          },
          {
            title: "Truy cập ổ đĩa/thư mục",
            detail:
              "Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
          },
          {
            title: "Tạo thư mục mới",
            detail:
              "Nhấp chuột phải vào một khoảng trống → chọn New → Folder. Đặt tên thư mục là ThucHanh_VuAnhTuan.",
          },
          {
            title: "Vào thư mục vừa tạo",
            detail: "Nhấp đúp vào thư mục ThucHanh_VuAnhTuan.",
          },
          {
            title: "Tạo tệp tin văn bản",
            detail:
              "Nhấp chuột phải vào khoảng trống → New → Text Document. Đặt tên là GhiChu.txt, sau đó nhấn Enter.",
          },
          {
            title: "Đổi tên tệp tin",
            detail:
              "Nhấp chuột phải vào tệp GhiChu.txt → chọn Rename. Đổi tên thành GhiChuQuanTrong.txt và nhấn Enter.",
          },
          {
            title: "Tạo thư mục con",
            detail:
              "Trong thư mục ThucHanh_VuAnhTuan, nhấp chuột phải → New → Folder. Đặt tên là TaiLieu.",
          },
          {
            title: "Sao chép tệp tin (Copy & Paste)",
            detail:
              "Nhấp chuột phải vào GhiChuQuanTrong.txt → Copy (hoặc Ctrl + C). Mở thư mục TaiLieu, nhấp chuột phải vào khoảng trống → Paste (Ctrl + V) để tạo bản sao.",
          },
          {
            title: "Di chuyển tệp tin (Cut & Paste)",
            detail:
              "Quay lại ThucHanh_VuAnhTuan, tạo tệp DiChuyen.txt. Cut tệp (Ctrl + X), vào TaiLieu và Paste (Ctrl + V). Tệp gốc biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.",
          },
          {
            title: "Xóa tệp tin",
            detail:
              "Trong thư mục TaiLieu, nhấp chuột phải vào GhiChuQuanTrong.txt → Delete. Tệp được chuyển vào Thùng rác (Recycle Bin).",
          },
          {
            title: "Xóa vĩnh viễn",
            detail:
              "Chọn tệp DiChuyen.txt, nhấn giữ Shift và nhấn Delete. Xác nhận cảnh báo để xóa vĩnh viễn mà không qua Thùng rác.",
          },
          {
            title: "Khôi phục từ Thùng rác",
            detail:
              "Mở Recycle Bin trên màn hình nền, tìm GhiChuQuanTrong.txt, nhấp chuột phải → Restore. Tệp quay trở lại vị trí ban đầu.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1JFkwbaVq1jy8-X4woLZxH8VhlYye_oUL/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1JFkwbaVq1jy8-X4woLZxH8VhlYye_oUL/preview",
  },
  {
    id: "2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    subject: "Kỹ năng học thuật",
    tools: ["PubMed", "MeSH Terms", "Google Scholar"],
    summary:
      "Thực hành quy trình tìm kiếm, sàng lọc và đánh giá tài liệu học thuật về ứng dụng NGS trong chẩn đoán sớm ung thư; kết quả được trình bày trong báo cáo đính kèm.",
    sections: [
      {
        title: "Các bước thực hiện",
        // subtitle: "Chủ đề: NGS trong chẩn đoán sớm ung thư",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Xác định chủ đề và thuật ngữ khóa",
            detail:
              "Chọn chủ đề: Ứng dụng công nghệ giải trình tự gen thế hệ mới (NGS) trong chẩn đoán sớm ung thư. Liệt kê từ khóa chính: NGS, next-generation sequencing, cancer diagnosis, liquid biopsy, precision oncology, genomics. Ghi nhận các thuật ngữ MeSH tương ứng trên PubMed để dùng cho bước tìm kiếm.",
          },
          {
            title: "Tìm kiếm trên PubMed với toán tử Boolean",
            detail:
              "Truy cập PubMed, nhập truy vấn: (NGS OR \"Next-generation sequencing\") AND \"Cancer diagnosis\". Kết hợp bộ lọc MeSH Terms để thu hẹp kết quả về nghiên cứu lâm sàng và bài review. Lưu lại truy vấn và số lượng kết quả ban đầu.",
          },
          {
            title: "Lọc tài liệu theo tiêu chí chất lượng",
            detail:
              "Giới hạn thời gian xuất bản trong 2–3 năm gần nhất vì lĩnh vực genomics cập nhật nhanh. Ưu tiên bài báo trên tạp chí có phản biện (peer-reviewed), báo cáo tổ chức uy tín (WHO, NCI) và sách giáo khoa hàn lâm. Loại bỏ nguồn tin tức tổng hợp thiếu trích dẫn nghiên cứu gốc.",
          },
          {
            title: "Bổ sung nguồn trên Google Scholar",
            detail:
              "Dùng Google Scholar để tìm thêm sách chuyên khảo, báo cáo chính phủ và bài báo liên quan. Kiểm tra số lần trích dẫn và thông tin tác giả để xác nhận mức độ được cộng đồng học thuật công nhận. Chọn tối thiểu 10 nguồn đa dạng loại hình (journal, sách, báo cáo, website chính thống).",
          },
          {
            title: "Đánh giá độ tin cậy từng nguồn",
            detail:
              "Lập bảng đánh giá theo tiêu chí: loại nguồn, tác giả/tổ chức, phản biện chuyên gia, mức độ cập nhật, có dữ liệu gốc hay chỉ tổng hợp. Xếp hạng mức 1–4 (ví dụ: bài NEJM, sách Strachan & Read, báo cáo WHO đạt mức 4; website tin tức thiếu căn cứ đạt mức 2). Ghi rõ lý do cho từng xếp hạng.",
          },
          {
            title: "Trích dẫn Harvard và hoàn thiện báo cáo",
            detail:
              "Trình bày danh mục tài liệu tham khảo theo Harvard Style (tác giả, năm, tiêu đề, nguồn xuất bản, DOI hoặc ngày truy cập đối với website). Mô tả ngắn quy trình tìm kiếm đã thực hiện, các thách thức gặp phải (thuật ngữ chuyên môn, tính cập nhật, rào cản ngôn ngữ) và kết luận về vai trò của kỹ năng này trong y học dựa trên bằng chứng.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1Wpj5hSBL6SfgZhhTuOAWPM2ic-JfOan5/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1Wpj5hSBL6SfgZhhTuOAWPM2ic-JfOan5/preview",
  },
  {
    id: "3",
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    subject: "Ứng dụng AI trong học tập",
    tools: ["ChatGPT", "Claude", "Prompt Engineering"],
    summary:
      "Thực hành thiết kế prompt theo ba mức (cơ bản → cải tiến → nâng cao) cho các tác vụ tóm tắt, giải thích khái niệm và tạo câu hỏi ôn tập; kết quả được trình bày trong báo cáo đính kèm.",
    sections: [
      {
        title: "Các bước thực hiện",
        // subtitle: "Thiết kế prompt như kỹ năng học thuật cốt lõi",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Xác định mục tiêu và chọn tác vụ học tập",
            detail:
              "Làm rõ mục đích sử dụng AI: ôn thi, hiểu sâu hay ứng dụng lâm sàng (Goal Anchoring). Chọn một trong ba tác vụ: tóm tắt tài liệu, giải thích khái niệm, hoặc tạo câu hỏi ôn tập. Ghi nhận thách thức của từng tác vụ — ví dụ tóm tắt dễ hời hợt nếu prompt mơ hồ, giải thích khái niệm dễ quá chung hoặc thiếu ví dụ RHM, câu hỏi ôn tập dễ quá đơn giản hoặc không sát mục tiêu thi.",
          },
          {
            title: "Viết prompt tóm tắt tài liệu qua ba mức",
            detail:
              "Bắt đầu với prompt cơ bản (ngắn, ít yêu cầu) và ghi nhận kết quả chung chung. Nâng lên prompt cải tiến: quy định cấu trúc đầu ra (bullet, bảng, sơ đồ) và mức độ chi tiết. Hoàn thiện prompt nâng cao: gán vai trò (ví dụ giảng viên), chia nhiệm vụ (task decomposition), nêu rõ mục đích sử dụng (ôn thi, trình bày). Tóm tắt không chỉ rút ngắn mà phải tái tổ chức thông tin theo schema nhận thức của người học.",
          },
          {
            title: "Viết prompt giải thích khái niệm qua ba mức",
            detail:
              "Prompt cơ bản: kiểm tra xem AI có thiếu ngữ cảnh và không kiểm soát được độ sâu không. Prompt cải tiến: bổ sung ví dụ minh họa, yêu cầu liên hệ kiến thức nền. Prompt nâng cao: áp dụng multi-level explanation (biết – hiểu – vận dụng), contextualization theo ngành RHM và contrastive learning (so sánh – đối chiếu với khái niệm liên quan). Mục tiêu là hiểu bản chất, không học vẹt.",
          },
          {
            title: "Viết prompt tạo câu hỏi ôn tập qua ba mức",
            detail:
              "Prompt cơ bản: đánh giá câu hỏi có quá chung chung, thiếu chiều sâu. Prompt cải tiến: yêu cầu cấu trúc rõ ràng, có đáp án kèm giải thích. Prompt nâng cao: phân tầng theo thang Bloom (nhớ → hiểu → vận dụng → phân tích), dùng structured output và depth control; gắn câu hỏi với ngữ cảnh thực tế. Thiết lập ràng buộc hợp lý (số câu, mức độ khó) để kiểm soát chất lượng.",
          },
          {
            title: "So sánh hiệu quả và lập bảng đánh giá",
            detail:
              "Với mỗi tác vụ, lập bảng so sánh ba mức prompt: cơ bản (ngắn, ít yêu cầu — hiệu quả thấp), cải tiến (có cấu trúc — trung bình), nâng cao (có vai trò, ví dụ, kỹ thuật chuyên sâu — cao). Ghi rõ điểm yếu của prompt cơ bản, cải thiện ở mức cải tiến và lợi ích cụ thể ở mức nâng cao. Lưu minh chứng kết quả đầu ra từ AI để đối chiếu.",
          },
          {
            title: "Tổng hợp nguyên tắc và hoàn thiện báo cáo",
            detail:
              "Hệ thống hóa các nguyên tắc đã áp dụng: Goal Anchoring, Cognitive Framing, Role Prompting, Task Decomposition, Output Control, Depth Engineering, Constraint Design, Learner Alignment (phù hợp trình độ và ngành RHM), kích hoạt tư duy phản biện và thiết kế prompt như một kịch bản học hoàn chỉnh. Kết luận: prompt tốt giúp kiểm soát chất lượng đầu ra, chủ động định hướng tư duy thay vì phụ thuộc thụ động vào AI.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1wyPsJmQppUVhN_LQoIFzxMGU5cTp5jSE/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1wyPsJmQppUVhN_LQoIFzxMGU5cTp5jSE/preview",
  },
  {
    id: "4",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    subject: "Làm việc nhóm số",
    tools: ["Trello", "Google Docs", "Google Drive", "Zalo", "Google Meet"],
    summary:
      "Thực hành phối hợp nhóm 5 người triển khai dự án tuyên truyền sức khỏe răng miệng cho học sinh tiểu học qua Trello, Google Workspace và Zalo; kết quả được trình bày trong báo cáo đính kèm.",
    sections: [
      {
        title: "Các bước thực hiện",
        // subtitle: "Chủ đề: Tuyên truyền sức khỏe răng miệng cho học sinh tiểu học",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Xác định chủ đề và phân vai công cụ",
            detail:
              "Thống nhất chủ đề dự án: Tuyên truyền sức khỏe răng miệng cho học sinh tiểu học. Phân công vai trò trong nhóm 5 thành viên (người điều phối, biên tập, trình bày…). Lựa chọn bộ công cụ: Trello (quản lý dự án), Google Docs (soạn thảo cộng tác), Google Drive (lưu trữ và chia sẻ), Zalo (giao tiếp hàng ngày), Google Meet (họp trực tuyến).",
          },
          {
            title: "Thiết lập nhóm Zalo và không gian Google Drive",
            detail:
              "Người điều phối tạo nhóm Zalo, mời tất cả thành viên tham gia để giao tiếp và kết nối nhanh. Trên Google Drive, tạo thư mục dự án chung; phân quyền xem/chỉnh sửa cho từng thành viên. Chuẩn bị cấu trúc lưu trữ: biên bản họp, tài liệu thuyết trình, phân chia nội dung và bản tổng hợp.",
          },
          {
            title: "Chuẩn bị tài liệu và tổ chức họp trên Google Meet",
            detail:
              "Trước cuộc họp, upload tài liệu liên quan lên Google Drive và gửi link qua Zalo. Tổ chức họp nhóm trên Google Meet để thảo luận nội dung, phân chia phần trình bày và thống nhất kế hoạch triển khai. Trong lúc họp, sử dụng Google Docs để ghi biên bản và nội dung đưa vào bài thuyết trình theo thời gian thực.",
          },
          {
            title: "Soạn thảo cộng tác trên Google Docs",
            detail:
              "Các thành viên cùng chỉnh sửa tài liệu trên Google Docs: biên bản cuộc họp, dàn ý và nội dung bài thuyết trình. Tận dụng chỉnh sửa đồng thời, lưu trữ tự động và chia sẻ link với mức quyền phù hợp (xem, nhận xét, chỉnh sửa). Đồng bộ tài liệu hoàn chỉnh vào thư mục Google Drive của nhóm.",
          },
          {
            title: "Quản lý tiến độ dự án trên Trello",
            detail:
              "Sau cuộc họp, tạo bảng Trello với tiêu đề là chủ đề dự án. Thêm các danh sách và thẻ tương ứng từng hạng mục công việc. Gắn nhiệm vụ, thời hạn và thành viên phụ trách cho từng thẻ; đính kèm tài liệu liên quan. Theo dõi tiến độ bằng kéo-thả thẻ theo phương pháp Kanban (cần làm → đang làm → hoàn thành).",
          },
          {
            title: "Đánh giá hiệu quả công cụ và rút kinh nghiệm",
            detail:
              "Đánh giá từng công cụ: Trello (giao diện trực quan, phù hợp nhóm nhỏ, hỗ trợ phân công và theo dõi); Google Docs (chỉnh sửa đồng thời, lưu tự động, tích hợp hệ sinh thái Google); Google Drive (đồng bộ và chia sẻ linh hoạt); Zalo (phổ biến, kết nối nhanh). Ghi nhận thách thức: thành viên chưa quen Trello — khắc phục bằng cách dành thời gian làm quen giao diện và các chức năng trước khi triển khai dự án.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1Xngv7as9QBxfgn4h-EUcyHpJLYlgqvsp/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1Xngv7as9QBxfgn4h-EUcyHpJLYlgqvsp/preview",
  },
  {
    id: "5",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    subject: "AI tạo sinh",
    tools: ["ChatGPT", "DALL·E", "Canva AI"],
    summary:
      "Thực hành kết hợp ChatGPT, DALL·E và Canva AI để tạo infographic về ứng dụng AI trong học tập môn chữa răng nội nha của sinh viên RHM; kết quả được trình bày trong báo cáo đính kèm.",
    sections: [
      {
        title: "Các bước thực hiện",
        // subtitle: "Sản phẩm: Infographic ứng dụng AI trong học nội nha",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Xác định đề tài và mục tiêu dự án",
            detail:
              "Chọn hướng ứng dụng AI trong học môn chữa răng nội nha — môn đòi hỏi chính xác cả lý thuyết và kỹ năng lâm sàng. Đặt mục tiêu: khám phá cách AI hỗ trợ học tập, thực hành nhiều công cụ, đánh giá ưu nhược điểm và tạo sản phẩm infographic trực quan. Lập kế hoạch luồng công việc: nội dung (ChatGPT) → hình ảnh (DALL·E) → trình bày (Canva AI).",
          },
          {
            title: "Tạo nội dung gốc bằng ChatGPT",
            detail:
              "Nhập prompt: yêu cầu viết nội dung infographic về ứng dụng AI trong học môn chữa răng nội nha, gồm 5 ý chính, ngắn gọn. Kiểm tra kết quả AI đề xuất (tìm kiếm thông tin, ghi nhớ kiến thức, mô phỏng lâm sàng, tạo tài liệu, cá nhân hóa học tập). Ghi nhận ưu điểm (đầy đủ, logic) và hạn chế (chưa có ví dụ thực tế nha khoa).",
          },
          {
            title: "Tinh chỉnh nội dung theo chuyên ngành",
            detail:
              "Chỉnh sửa thủ công: rút gọn câu, thêm ví dụ nha khoa (viêm tủy, viêm quanh chóp), làm rõ tính ứng dụng lâm sàng. Ví dụ biến câu chung chung thành: \"Sinh viên có thể dùng AI để tra cứu nhanh bệnh lý như viêm tủy, viêm quanh chóp trong vài giây\". Bước này biến nội dung AI thành kiến thức phù hợp trình độ và ngữ cảnh RHM.",
          },
          {
            title: "Tạo hình ảnh minh họa bằng DALL·E",
            detail:
              "Viết prompt mô tả hình ảnh: sinh viên nha khoa học điều trị nội nha với trợ lý AI, phong cách y khoa hiện đại, tông màu xanh. Đánh giá kết quả: hình ảnh sáng tạo, phù hợp chủ đề nhưng một số chi tiết chưa sát thực tế lâm sàng. Khắc phục bằng cách chọn lọc ảnh phù hợp nhất hoặc kết hợp nhiều ảnh.",
          },
          {
            title: "Thiết kế infographic trên Canva AI",
            detail:
              "Chọn template infographic trên Canva, nhập nội dung đã chỉnh sửa, chèn hình ảnh từ DALL·E. Điều chỉnh bố cục, màu sắc và typography để đảm bảo rõ ràng, dễ hiểu, trình bày khoa học. Sản phẩm hoàn chỉnh gồm tiêu đề, 5 ứng dụng chính của AI và hình minh họa — phục vụ học tập, ghi nhớ và trình bày.",
          },
          {
            title: "So sánh công cụ và hoàn thiện báo cáo",
            detail:
              "Lập bảng so sánh: ChatGPT (nội dung nhanh, logic — thiếu cá nhân hóa), DALL·E (hình ảnh sáng tạo — chưa chính xác 100%), Canva AI (thiết kế nhanh — ít tùy chỉnh sâu). Phân tích vai trò AI: tăng tốc học tập, gợi ý ý tưởng nhưng có thể sai thông tin; cần không sao chép nguyên văn, chỉnh sửa và kiểm tra lại. Lưu tài liệu minh chứng: prompt, kết quả AI, các phiên bản chỉnh sửa và infographic cuối cùng.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1yEcx8SpCeokiL0gaA1U3P_aGxP-0qvw_/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1yEcx8SpCeokiL0gaA1U3P_aGxP-0qvw_/preview",
  },
  {
    id: "6",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    subject: "Đạo đức & liêm chính học thuật",
    tools: ["Gemini", "Quy chế học vụ", "Phác đồ Bộ Y tế"],
    summary:
      "Nghiên cứu chính sách AI tại trường Y, thực hành tổng hợp tài liệu lâm sàng viêm ruột thừa cấp với minh bạch và kiểm chứng; kết quả được trình bày trong báo cáo đính kèm.",
    sections: [
      {
        title: "Các bước thực hiện",
        // subtitle: "Chẩn đoán và xử trí viêm ruột thừa cấp — AI có trách nhiệm",
        expandLabel: "Xem cách làm",
        steps: [
          {
            title: "Nghiên cứu chính sách AI tại trường Y",
            detail:
              "Tóm tắt ba trụ cột chính sách Generative AI tại khối Sức khỏe: quyền tác giả (AI không được đứng tên tác giả), trách nhiệm lâm sàng-học thuật (người học chịu trách nhiệm toàn bộ, hallucination bị xử như gian lận), tính bảo mật (cấm tải dữ liệu bệnh nhân chưa mã hóa lên AI mở). Ghi nhận nhận định cá nhân: chính sách khắt khe là cần thiết vì đặc thù ngành Y, nhưng cần thêm hướng dẫn prompting y khoa và workshop thực hành.",
          },
          {
            title: "So sánh chính sách AI giữa các khối ngành",
            detail:
              "Lập bảng so sánh theo tiêu chí: mức độ mở (Y Dược — hạn chế nghiêm; Kỹ thuật — cởi mở; Kinh tế-XH — có điều kiện), hành vi bị cấm (tải dữ liệu lâm sàng, chẩn đoán thay người vs đạo văn code vs fake data), yêu cầu trích dẫn (khai báo ở Phương pháp/Phụ lục vs comment code vs APA/Harvard). Rút ra sự khác biệt do mức độ rủi ro đối với con người giữa các ngành.",
          },
          {
            title: "Thực hiện nhiệm vụ học tập với AI",
            detail:
              "Chọn nhiệm vụ: tổng hợp tài liệu bài thảo luận \"Chẩn đoán và xử trí viêm ruột thừa cấp\". Prompt 1 — đặt vai bác sĩ trưởng khoa Ngoại tiêu hóa, yêu cầu dàn ý lâm sàng-cận lâm sàng. Prompt 2 — yêu cầu bảng so sánh siêu âm và CT-scan (độ nhạy, độ đặc hiệu, ưu nhược điểm). Ghi đầy đủ prompt và đầu ra vào nhật ký minh bạch.",
          },
          {
            title: "Kiểm chứng, chỉnh sửa và tích hợp đầu ra AI",
            detail:
              "Quy trình 3 bước: (1) Fact-checking — đối chiếu thang điểm Alvarado với sách Ngoại cơ sở và phác đồ Bộ Y tế, sửa nhầm lẫn Alvarado/Modified Alvarado; (2) Việt hóa thuật ngữ — thay thuật ngữ dịch máy (ví dụ \"lockhole surgery\") bằng \"phẫu thuật nội soi cắt ruột thừa\"; (3) Tích hợp sáng tạo — chuyển mô tả triệu chứng thành lưu đồ chẩn đoán: đau hố chậu phải → siêu âm → CT nếu nghi ngờ → xác định → phẫu thuật.",
          },
          {
            title: "Phân tích đạo đức và xây dựng nguyên tắc cá nhân",
            detail:
              "Phân tích ranh giới hỗ trợ hợp lý (AI như trợ lý tìm kiếm, sinh viên giữ quyền kiểm soát) và gian lận (giao phó hoàn toàn tư duy, copy-paste bài phân tích ca bệnh). Nêu vấn đề đạo văn gián tiếp, cognitive atrophy và ảo tưởng AI. Xây dựng 6 nguyên tắc: Clinical Supremacy, Patient Privacy First, Radical Transparency, Human-in-the-loop, Deliberate Practice, Bias Filtering.",
          },
          {
            title: "Viết AI Disclosure và hoàn thiện báo cáo",
            detail:
              "Soạn tuyên bố minh bạch: công cụ đã dùng (Gemini), ngày sử dụng, mục đích cụ thể (gợi ý dàn ý, định dạng bảng so sánh), cam kết không thay thế tư duy lâm sàng và đã đối chiếu với sách giáo khoa Ngoại khoa cùng phác đồ Bộ Y tế. Hoàn thiện báo cáo gồm phân tích chính sách, nhật ký prompt, quy trình kiểm chứng và bộ nguyên tắc cá nhân.",
          },
        ],
      },
    ],
    driveLink: "https://drive.google.com/file/d/1ojB-N9wR-1McUsVWw7K0IMMw3SzreCTi/view?usp=sharing",
    pdfEmbedLink: "https://drive.google.com/file/d/1ojB-N9wR-1McUsVWw7K0IMMw3SzreCTi/preview",
  },
];
