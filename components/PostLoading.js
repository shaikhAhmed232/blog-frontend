export default function PostLoading(Component) {
  return function PostLoadingInner({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ fontSize: "1.4rem" }}>we are waiting for data to load...</p>
    );
  };
}
