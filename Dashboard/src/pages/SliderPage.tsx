import { SliderForm } from "../components/SliderForm/SliderForm";
import { SliderPreview } from "../components/SliderPreview/SliderPreview";
import { TitledLayer } from "../layout/TitledLayer";

export default function SliderPage() {
    return (
		<>
			<TitledLayer>
				<SliderPreview />
			</TitledLayer>
			<TitledLayer editTitle>
				<SliderForm />
			</TitledLayer>
		</>
	)
}