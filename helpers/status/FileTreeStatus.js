export const FileTreeUpdateStatus = {
	SUCCESS: data => ({ success: true, message: "Success", data: data }),

	FAILURE: {
		success: false,
		message: "Something went wrong while updating file tree",
		data: undefined
	}
};
