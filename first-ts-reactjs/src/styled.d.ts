// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
	export interface DefaultTheme {
		// theme의 형태를 지정할 위치
		borderRadius: string;

		colors: {
			main: string;
			secondary: string;
		};
	}
}
