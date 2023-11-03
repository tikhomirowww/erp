export default function ModalWindow({ trigger, onClose, children }) {
	if (trigger) {
		return (
			<div className="fixed top-0 left-0 bg-dark/50 w-full h-full p-5 flex-middle overflow-auto best-scrollbar">
				<div className="bg-white rounded-3xl p-5 max-w-[1140px] w-full my-auto">
					{onClose && (
						<div
							className="flex
                            justify-end items-center">
							<div
								className="hover:opacity-90 cursor-pointer transition-opacity px-1.5 py-0.5 flex items-center gap-1"
								onClick={onClose}>
								<span className="font-medium leading-[125%] text-blue">
									Закрыть
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M14.7142 5.28607C15.0396 5.61151 15.0396 6.13914 14.7142 6.46458L11.1786 10.0002L14.7142 13.5357C15.0396 13.8611 15.0396 14.3888 14.7142 14.7142C14.3887 15.0397 13.8611 15.0397 13.5356 14.7142L10.0001 11.1787L6.4646 14.7142C6.13917 15.0396 5.61153 15.0396 5.28609 14.7142C4.96066 14.3887 4.96066 13.8611 5.28609 13.5356L8.82159 10.0002L5.28607 6.46464C4.96063 6.1392 4.96063 5.61156 5.28607 5.28613C5.61151 4.96069 6.13914 4.96069 6.46458 5.28613L10.0001 8.82164L13.5357 5.28607C13.8611 4.96063 14.3887 4.96063 14.7142 5.28607Z"
										fill="#3560FA"
									/>
								</svg>
							</div>
						</div>
					)}
                    {children}
				</div>
			</div>
		);
	}
}
