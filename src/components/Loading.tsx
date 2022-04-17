export default function Loading() {
  return (
    <div className="bg-cardBg shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-[12px] p-10">
      <p className="text-primary font-medium">Uploading...</p>
      <div className="mt-5 w-full bg-loadingBg min-h-[.5rem] min-w-[20rem] rounded-[8px] overflow-hidden">
        <div className="bg-button min-h-[.5rem] max-w-[5rem] rounded-[8px] animate-loading"></div>
      </div>
    </div>
  )
}
