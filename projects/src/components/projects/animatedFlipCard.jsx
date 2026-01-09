


export default function AnimatedCardFlio() {



    return (
        <div className="flex flex-col pt-[150px] justify-center bg-gray-50">
            <h1>Animated Flip Card Using Pure CSS</h1>
            <div className="flip-card-container">
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <h3 className="flip-card-title">
                                Front Side 
                            </h3>
                        </div>
                        <div className="flip-card-back">
                            <h3 className="flip-card-back">
                                <h3 className="flip-card-title =">Back Side</h3>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}