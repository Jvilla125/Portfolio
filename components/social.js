import Link from "next/link"

export default function Social() {
    return (
        <>
            <div class="container text-center">
                <div class="row">
                    <div class="col ">
                        <Link href="https://github.com/Jvilla125" target="_blank"><i className="bi bi-github" ></i></Link>
                    </div>
                    <div class="col">
                        <Link href="https://www.linkedin.com/in/jeffrey-villacorta/" target="_blank"><i className="bi bi-linkedin" ></i></Link>
                    </div>
                    <div class="col">
                        <i class="bi bi-envelope-fill" style={{color: "blue"}} onClick={() =>
                                (window.location = "mailto:jeffalexv@gmail.com")
                            }>
                        </i>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

