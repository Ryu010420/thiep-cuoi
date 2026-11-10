import http.server
import socketserver
import webbrowser
import socket
import os
import sys

# Ensure UTF-8 output on Windows
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

def get_free_port(start_port=8888):
    port = start_port
    while port < start_port + 50:
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
            if s.connect_ex(('127.0.0.1', port)) != 0:
                return port
        port += 1
    return start_port

def get_local_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(('8.8.8.8', 80))
            return s.getsockname()[0]
    except Exception:
        return '127.0.0.1'

def run_server():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    port = 8888
    handler = http.server.SimpleHTTPRequestHandler
    
    handler.extensions_map.update({
        '.woff2': 'font/woff2',
        '.svg': 'image/svg+xml',
        '.js': 'application/javascript',
        '.css': 'text/css'
    })

    local_ip = get_local_ip()
    url_local = f"http://localhost:{port}/index.html"
    url_lan = f"http://{local_ip}:{port}/index.html"
    print("=" * 68)
    print("      XUONG THIET KE THIEP CUOI LOCAL VIP - ANTIGRAVITY")
    print("=" * 68)
    print(f" [OK] May tinh (Local):             {url_local}")
    print(f" [OK] Dien thoai (Bat cung Wi-Fi):   {url_lan}")
    print(" [OK] Dang mo trinh duyet web...")
    print(" [i] Nhan Ctrl+C hoac dong cua so khi muon dung.")
    print("=" * 68)

    class ThreadingServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
        daemon_threads = True
        allow_reuse_address = True

    try:
        webbrowser.open(url_local)
    except Exception as e:
        print(f"Khong the mo trinh duyet tu dong: {e}")

    socketserver.TCPServer.allow_reuse_address = True
    with ThreadingServer(("", port), handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nDa dung may chu.")

if __name__ == '__main__':
    run_server()
