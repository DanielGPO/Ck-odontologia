function LoadingSpinner() {
  return (
    <div className="h-screen bg-white w-full flex justify-center items-center">
      <div className="bg-white border border-b-blue-500 border-[3px] rounded-full animate-spin h-[70px] w-[70px]" />
    </div>
  );
}
export default LoadingSpinner;
