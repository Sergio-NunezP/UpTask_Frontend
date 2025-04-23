export default function ErrorMessage({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center uppercase font-bold text-sm" role="alert">
            {children}
        </div>
    )
}