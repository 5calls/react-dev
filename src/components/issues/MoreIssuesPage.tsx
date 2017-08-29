import * as React from 'react';
import i18n from '../../services/i18n';
import { RouteComponentProps } from 'react-router-dom';
import { LayoutContainer } from '../layout';
import { Issue, Category, CategoryMap } from '../../common/model';
import { MoreIssuesTranslatable } from './index';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly totalCount: number;
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;
}

export interface State {
  issueCategoryMap: CategoryMap[];
}

class MoreIssuesPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = this.setStateFromProps(props);
  }

  setStateFromProps(props: Props): State {
    let categoryMap: CategoryMap[] = [];

    if (props.issues) {
      props.issues.forEach((issue) => {
        let category: string = 'uncategorized';

        if (issue.categories[0]) {
          category = issue.categories[0].name;

          let availableMap;
          categoryMap.forEach((map) => {
            if (map.category.name == category) {
              availableMap = map
            }
          })

          if (availableMap) {
            availableMap.issues.push(issue);
          } else {
            let newCategory: Category = {name: category};
            let newCategoryMap: CategoryMap = {category: newCategory, issues: [issue] };
            categoryMap.push(newCategoryMap);
          }
        }
      });  
    }

    return {
      issueCategoryMap: categoryMap,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));
  }

  componentDidMount() {
    this.props.onGetIssuesIfNeeded();
  }

  render() {
    return (
      <LayoutContainer issueId={this.props.match.params.id}>
        <main role="main" id="content" className="layout__main">
          <MoreIssuesTranslatable
            inactiveIssues={this.props.issues}
            categoryMap={this.state.issueCategoryMap}
            totalCount={this.props.totalCount}
            t={i18n.t}
            onSelectIssue={this.props.onSelectIssue}
          />
        </main>
      </LayoutContainer>
    );
  }
}

export default MoreIssuesPage;