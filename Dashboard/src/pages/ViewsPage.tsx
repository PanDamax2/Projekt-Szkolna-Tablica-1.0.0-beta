import { TitledLayer } from '../layout/TitledLayer'
import { ViewsForm } from '../components/ViewsForm/ViewsForm'
import { ViewsPreview } from '../components/ViewsPreview/ViewsPreview'

export default function ViewsPage() {

	return (
		<>
			<TitledLayer>
				<ViewsPreview />
			</TitledLayer>
			<TitledLayer editTitle>
				<ViewsForm />
			</TitledLayer>
		</>
	)
}
