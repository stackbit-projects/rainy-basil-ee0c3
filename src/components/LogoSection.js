const LogoSection = (props) => {
    const { annotationPrefix, testimonials, title } = props;
    return (
        <div
            className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14 lg:py-20 mt-10 mb-10 text-center"
            data-sb-field-path={annotationPrefix}>
            <h1
                className="text-3xl tracking-tight sm:text-4xl mb-2"
                data-sb-field-path=".title">
                {title}
            </h1>
            <div
                className="flex justify-center items-center"
                data-sb-field-path=".testimonials">
                {testimonials.map((testimonial, index) => (
                    <div className="p-6" key={index} data-sb-field-path={`.${index}`}>
                        <p className="text-sm text-gray-400" data-sb-field-path=".body">
                            {testimonial.body}
                        </p>
                        <h6 className="text-sm text-gray-400" data-sb-field-path=".source">
                            {testimonial.source}
                        </h6>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSection;