import { ReplacementsForm } from '../components/ReplacementsForm/ReplacementsForm'
import { ReplacementsPreview } from '../components/ReplacementsPreview/ReplacementsPreview'
import { TitledLayer } from '../layout/TitledLayer'

export default function ReplacementsPage() {
	return (
		<>
			<TitledLayer>
				<ReplacementsPreview />
			</TitledLayer>
			<TitledLayer editTitle>
				<ReplacementsForm />
			</TitledLayer>
		</>
	)
}
