import { useState } from "react";

export default function StateWithTS() {
	const [value, setValue] = useState<number | string>(0);
	setValue(2);
	setValue("hello");
	setValue(true);

	return <div>test</div>;
}
