export default function NoiseOverlay({ opacity = 0.2 }) {
  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0 mix-blend-overlay"
      style={{
        opacity: opacity,
        backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIj48ZGVmcz48ZmlsdGVyIGlkPSJubiI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbGw9InRyYW5zcGFyZW50Ii8+PHJlY3Qgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiIGZpbHRlcj0idXJsKCNubikiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')`
      }}
    />
  );
}