const Form = () => {
  return (
    <div>
			<div id="formulier" className=" h-screen bg-white-off">
				<div className="header py-12 relative bg-blue-dark w-full  z-10 flex flex-row items-center justify-center ">
					<ol className="flex  items-center w-1/2 relative gap-8 z-10">
						<li className="flex w-full items-center  flex-col relative after:content-[''] after:w-[120%] after:h-1 after:border-b after:border-pink after:border-4 after:inline-block after:absolute after:left-1/2 after:top-1/2  after:-z-[1] ">
							<span className="flex items-center justify-center w-16 h-16 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-black text-2xl font-bold ">
								1
							</span>
							<span className="text-white absolute -top-1/2  ">
								Value estimate
							</span>
						</li>
						<li className="flex w-full items-center  flex-col  relative after:content-[''] after:w-[120%] after:h-1 after:border-b after:border-pink after:border-4 after:inline-block after:absolute after:left-1/2 after:top-1/2  after:-z-[1] ">
							<span className="flex items-center justify-center w-16 h-16 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-black text-2xl font-bold ">
								2
							</span>
							<span className="text-white absolute -top-1/2  ">
								Additonal information
							</span>
						</li>	
            <li className="flex w-full items-center  flex-col  relative after:content-[''] after:w-[120%] after:h-1 after:border-b after:border-pink after:border-4 after:inline-block after:absolute after:left-1/2 after:top-1/2  after:-z-[1] ">
							<span className="flex items-center justify-center w-16 h-16 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-black text-2xl font-bold ">
								3
							</span>
							<span className="text-white absolute -top-1/2  ">
                  Special objects
							</span>
						</li>
						<li className="flex w-full items-center  flex-col  relative ">
							<span className="flex items-center justify-center w-16 h-16 bg-white rounded-full lg:h-16 lg:w-16  shrink-0 text-black text-2xl font-bold ">
								4
							</span>
							<span className="text-white absolute -top-1/2  ">
								Insurances
							</span>
						</li>
					</ol>
				</div>
				<div className="xl:container mx-auto bg-white h-screen"></div>
			</div>
		</div>
  );
};

export default Form;
