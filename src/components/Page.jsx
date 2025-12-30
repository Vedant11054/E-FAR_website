export default function Page({ title, description, children }) {
  return (
    <div className="min-h-[calc(100vh-6rem)]">
      {children}
    </div>
  );
}
