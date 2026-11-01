function FeedbackInput({
    label,
    type = "text",
    placeholder,
    textarea
}) {

    return (

        <div className="space-y-2">

            <label className="text-sm text-gray-300">

                {label}

            </label>

            {textarea ? (

                <textarea
                    rows={5}
                    placeholder={placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-orange-400"
                />

            ) : (

                <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none transition focus:border-orange-400"
                />

            )}

        </div>

    );
}

export default FeedbackInput;