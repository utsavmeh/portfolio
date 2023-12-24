import React from "react";
import { Button } from "components";

export const TechnoogiesButton = ({techName}) => {
	return(
		<Button
			className="bg-transparent cursor-pointer leading-[normal] min-w-[69px] rounded-[10px] text-[8px] text-center"
			shape="round"
			size="xs"
			variant="outline"
			color="deep_purple_A100_deep_orange_300"
		>{techName}</Button>
	)
}
