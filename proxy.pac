
function FindProxyForURL(url, host) {
  // 不走代理的域名和 IP（本地/内网/国内）
  if (
    isPlainHostName(host) ||
    dnsDomainIs(host, ".local") ||
    shExpMatch(host, "*.baidu.com") ||
    shExpMatch(host, "*.qq.com") ||
    shExpMatch(host, "*.jd.com") ||
    isInNet(host, "10.0.0.0", "255.0.0.0") ||
    isInNet(host, "172.16.0.0", "255.240.0.0") ||
    isInNet(host, "192.168.0.0", "255.255.0.0")
  ) {
    return "DIRECT";
  }

  // 默认全部走 Socks5 代理
  return "SOCKS5 170.64.224.113:10150";
}
