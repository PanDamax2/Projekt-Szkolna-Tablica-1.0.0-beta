import { REPLACEMENTS } from '../../constants/categories'
import { TableWrapper } from '../../layout/TableWrapper'
import { useGetReplacements } from '../../queries/replacementQueries'
import { Replacement } from '../../types/components/ReplacementsPreview'
import { ErrorMessage } from '../ErrorMessage/ErrorMessage'
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner'
import { Table } from '../Table/Table'
import { Tbody } from '../Tbody/Tbody'
import { Td } from '../Td/Td'
import { Thead } from '../Thead/Thead'

export function ReplacementsPreview() {
	const { data, isLoading, isError, error } = useGetReplacements()

	if (isLoading) return <LoadingSpinner text />
	if (isError) return <ErrorMessage message={error?.message} />
	if (!data || data.length === 0) return <ErrorMessage message={'Brak danych do wyświetlenia.'} />

	return (
		<TableWrapper>
			<Table>
				<Thead>
					{REPLACEMENTS.map(item => (
						<th className='px-6 p-2' key={item.key}>
							{item.title}
						</th>
					))}
				</Thead>

				<Tbody>
					{data.map((el: Replacement) => (
						<tr key={el.id} className='border-b border-[#d9d9d9] dark:border-slate-500'>
							<Td>{el.lesson}</Td>
							<Td>{el.teacher}</Td>
							<Td>{el.branch}</Td>
							<Td>{el.subject}</Td>
							<Td>{el.room}</Td>
							<Td>{el.deputy}</Td>
							<Td>{el.date}</Td>
						</tr>
					))}
				</Tbody>
			</Table>
		</TableWrapper>
	)
}