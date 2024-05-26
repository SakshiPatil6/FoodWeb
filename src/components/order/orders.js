import './orders.css';
export default function Orders() {
    return (
        <>
            <section className='orders' id='orders'>
                <h3 className="subheading">Order Now</h3>
                <h1 className="heading">Free and Fast</h1>

                <form action=''>
                    <div className='inputBox'>
                        <div className='input'>
                            <span>your name</span>
                            <input type='text' placeholder='Enter your name' />
                        </div>
                        <div className='input'>
                            <span>your number</span>
                            <input type='number' placeholder='Enter your number' />
                        </div>
                    </div>

                    <div className='inputBox'>
                        <div className='input'>
                            <span>your order</span>
                            <input type='text' placeholder='Enter order name' />
                        </div>
                        <div className='input'>
                            <span>additional food</span>
                            <input type='test' placeholder='extra with food' />
                        </div>
                    </div>

                    <div className='inputBox'>
                        <div className='input'>
                            <span>how much</span>
                            <input type='number' placeholder='how many orders' />
                        </div>
                        <div className='input'>
                            <span>date and time</span>
                            <input type='datetime-local'/>
                        </div>
                    </div>

                    
                    <div className='inputBox'>
                        <div className='input'>
                            <span>your address</span>
                            <textarea placeholder='Enter your address' cols='30' rows='10'/>
                        </div>
                        <div className='input'>
                            <span>your message</span>
                            <textarea placeholder='Enter your message' cols='30' rows='10'/>
                        </div>
                    </div>

                    <input type='submit' value='order now' className='btn1'/>
                    
                </form>
            </section>
        </>
    );
}