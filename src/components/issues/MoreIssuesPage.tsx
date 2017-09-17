import * as React from 'react';
import i18n from '../../services/i18n';
import { RouteComponentProps } from 'react-router-dom';
import { LayoutContainer } from '../layout';
import { Issue, Category, CategoryMap } from '../../common/model';
import { MoreIssuesTranslatable } from './index';

interface RouteProps extends RouteComponentProps<{ id: string }> { }

interface Props extends RouteProps {
  readonly issues: Issue[];
  readonly currentIssue: Issue;
  readonly completedIssueIds: string[];
  readonly onSelectIssue: (issueId: string) => Function;
  readonly onGetIssuesIfNeeded: () => Function;
}

export interface State {
  currentIssue: Issue;
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

    // this makes more sense as an actual Map<string, Issues[]> but I couldn't get it
    // to render in the view no matter what I tried, so it's this /shrug
    if (props.issues) {
      props.issues.forEach((issue) => {
        let category: string = 'uncategorized';

        if (issue.categories[0]) {
          category = issue.categories[0].name;

          let availableMap;
          categoryMap.forEach((map) => {
            if (map.category.name === category) {
              availableMap = map;
            }
          });

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

    categoryMap.sort((a, b) => {
      let nameA = a.category.name.toLowerCase();
      let nameB = b.category.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    return {
      currentIssue: props.currentIssue,
      issueCategoryMap: categoryMap,
    };
  }

  componentWillReceiveProps(newProps: Props) {
    this.setState(this.setStateFromProps(newProps));

    if (!this.state.currentIssue && newProps.currentIssue) {
      this.props.onSelectIssue(newProps.currentIssue.id);
    }
  }

  componentDidMount() {
    this.props.onGetIssuesIfNeeded();
  }

  render() {
    return (
      <LayoutContainer
        issueId={this.props.match.params.id}
        match={this.props.match}
        location={this.props.location}
        history={this.props.history}
      >
        <main role="main" id="content" className="layout__main">
          <MoreIssuesTranslatable
            inactiveIssues={this.props.issues}
            categoryMap={this.state.issueCategoryMap}
            completedIssueIds={this.props.completedIssueIds}
            t={i18n.t}
            onSelectIssue={this.props.onSelectIssue}
            match={this.props.match}
            location={this.props.location}
            history={this.props.history}
          />
        </main>
      </LayoutContainer>
    );
  }
}

export default MoreIssuesPage;