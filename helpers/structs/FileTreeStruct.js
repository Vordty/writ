import { struct } from "superstruct";

export const FileTreeItemStruct = struct({
	id: "string | number",
	title: "string",
	isFolder: "boolean",
	parentId: "number",
	isOpen: "boolean",
	order: "number? | null",
});
