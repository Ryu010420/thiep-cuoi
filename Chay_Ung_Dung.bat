@echo off
chcp 65001 > nul
title XƯỞNG THIẾT KẾ THIỆP CƯỚI LOCAL PRO

echo =======================================================
echo    💍 ĐANG KHỞI ĐỘNG XƯỞNG THIẾT KẾ THIỆP CƯỚI LOCAL...
echo =======================================================
echo.

:: Kiểm tra Python
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo [✔] Tìm thấy Python. Đang khởi chạy máy chủ cục bộ...
    python server.py
) else (
    echo [!] Không tìm thấy Python, mở trực tiếp bằng trình duyệt mặc định...
    start "" "index.html"
)

pause
