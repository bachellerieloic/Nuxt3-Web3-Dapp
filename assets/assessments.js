
export const imageSizes = {
    'good_idea.svg': { width: 90, margin: 'mb-2' },
    'vague_idea.svg': { width: 110, margin: 'mb-1' },
    'no.svg': { width: 105, margin: 'mb-3' },
    'not_applicable.svg': { width: 70, margin: 'mb-1' },
    'working.svg': { width: 100, margin: 'mb-0' },
    'option2.svg': { width: 120, margin: 'mb-n5' },
    'more_thought.svg': { width: 100, margin: 'mb-0' },
}

export const assessments = {
    estatePlan: {
        id: 'estatePlan',
        title: 'Estate Plan',
        subTitle: 'This questionnaire will help you figure out estate planning',
        colour: 'blue',
        bannerColour: 'estatePlanningLaw',
        questions: {
            estatePlan1: {
                id: 'estatePlan1',
                text: 'Do you have a prepared and signed will?',
                percentage: 0.07,
                strength: 'You have an updated Will in place',
                focus: 'Ensure you have an up to date Will in place',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it is out of date', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            estatePlan2: {
                id: 'estatePlan2',
                    text: 'Do you have a living will or medical directive?',
                percentage: 0.07,
                strength: 'You have an updated medical directive',
                focus: 'Ensure you have a living will or medical directive',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it is out of date', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            estatePlan3: {
                id: 'estatePlan3',
                    text: 'Do you have an executor that you are confident in?',
                percentage: 0.07,
                strength: 'You have an executor(s) that you are confident in',
                focus: 'Ensure you have an executor that you are confident in',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I need to update them on details', coefficient: 0.7, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'Yes, but I am not confident', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'not_applicable.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            estatePlan4: {
                id: 'estatePlan4',
                    text: 'Do you have Powers of Attorney, for both property and personal care?',
                percentage: 0.06,
                strength: 'You have your Powers of Attorney selected',
                focus: 'Select Powers of Attorney for both property and personal care/medical decisions',
                options: {
                    '1': {id: '1', text: 'Yes, I have both covered', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have to update them', coefficient: 0.7, image: 'working.svg'},
                    '3': {id: '3', text: 'Yes, but only one of them', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            estatePlan5: {
                id: 'estatePlan5',
                    text: 'Do your executor and Power(s) of Attorney know what\'s expected of them when you pass?',
                percentage: 0.06,
                strength: 'Your executor(s) know what is expected of them',
                focus: 'Ensure that your executor(s) know your wishes and what is expected of them',
                options: {
                    '1': {id: '1', text: 'Yes, they do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'They have a good idea', coefficient: 0.7, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, not yet', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I do not have an executor(s)', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan6: {
                id: 'estatePlan6',
                    text: 'Are your loved ones aware of your final wishes, funeral details and do they know what is expected of them?',
                percentage: 0.05,
                strength: 'Your loved ones are aware of your final wishes and funeral details',
                focus: 'Ensure your loved ones understand your final wishes and funeral details',
                options: {
                    '1': {id: '1', text: 'Yes, they are', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have some updates', coefficient: 0.7, image: 'working.svg'},
                    '3': {id: '3', text: 'They have a good idea', coefficient: 0.4, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, they are not', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan7: {
                id: 'estatePlan7',
                    text: 'Have you had a family meeting with your children to discuss your estate when you are to pass?',
                percentage: 0.05,
                strength: 'You\'ve had a family meeting to discuss your wishes',
                focus: 'Have a family meeting to ensure that they know what is expected of them with your estate',
                notApplicableOptionId : '4',
                options: {
                    '1': {id: '1', text: 'Yes, we have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but they have an idea', coefficient: 0.2, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            estatePlan8: {
                id: 'estatePlan8',
                    text: 'Does your estate cover all outstanding debt?',
                percentage: 0.07,
                strength: 'Your estate covers all outstanding debt',
                focus: 'Determine how your outstanding debt can be taken care of',
                options: {
                    '1': {id: '1', text: 'Yes, it does', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but it will be taken care of', coefficient: 0.9, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, but it covers most of it', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, it does not', coefficient: 1, image: 'no.svg'},
                }
            },
            estatePlan9: {
                id: 'estatePlan9',
                    text: 'Do you have a succession plan in place for your business, if applicable?',
                percentage: 0.05,
                strength: 'You have a succession plan in place for your business',
                focus: 'Ensure that you have a succession plan in place for your business',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it needs updates', coefficient: 0.7, image: 'working.svg'},
                    '3': {id: '3', text: 'No, but I\'ve thought about it', coefficient: 0.2, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            estatePlan10: {
                id: 'estatePlan10',
                    text: 'Have you taken inventory and itemized of all your valuable assets? (Physical and non-physical assets)',
                percentage: 0.04,
                strength: 'You have taken inventory of your valuable assets',
                focus: 'Take inventory of your valuable assets',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it needs to be updated', coefficient: 0.7, image: 'working.svg'},
                    '3': {id: '3', text: 'No, but I have a good idea', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan11: {
                id: 'estatePlan11',
                    text: 'How confident are you in your estate planning professionals?',
                percentage: 0.07,
                strength: 'You are confident in your estate planning professionals',
                focus: 'Ensure you have estate planners that you are confident in',
                options: null,
                isSliderBar: true
            },
            estatePlan12: {
                id: 'estatePlan12',
                    text: 'How often do you review your will?',
                percentage: 0.06,
                strength: 'You review your will often',
                focus: 'You review your will every 3 to 5 years',
                options: {
                    '1': {id: '1', text: 'Once every couple of years', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Once every 3 to 5 years', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Around major life events', coefficient: 0.8, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Every 10 years', coefficient: 0, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Never', coefficient: 0, image: 'no.svg'},
            }
            },
            estatePlan13: {
                id: 'estatePlan13',
                    text: 'Do you have someone that has access to your accounts, essential documents, social media accounts and passwords in case of emergency?',
                percentage: 0.06,
                strength: 'You have someone who can access your accounts and essential documents',
                focus: 'Select someone you trust to have access to your accounts and essential documents',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have to update this information', coefficient: 0.7, image: 'working.svg'},
                    '3': {id: '3', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan14: {
                id: 'estatePlan14',
                    text: 'Have you introduced your Power of Attorney or executor to your estate planning professionals?',
                percentage: 0.05,
                strength: 'You have introduced your estate planning professionals to your Power of Attorney',
                focus: 'Introduce your estate planning professionals to your Powers of Attorney',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but they could meet again', coefficient: 0.8, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, not all of them', coefficient: 0.2, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {
                        id: '5',
                        text: 'I do not have a Power of Attorney or executor yet',
                        coefficient: 0,
                        image: 'not_applicable.svg'
                    },
                }
            },
            estatePlan15: {
                id: 'estatePlan15',
                    text: 'Is it important for you to leave a large estate?',
                percentage: 0,
                notApplicableOptionId : '4',
                options: {
                    '1': {id: '1', text: 'Yes, it is', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Somewhat important', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, it is not', coefficient: 1, image: 'no.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            estatePlan16: {
                id: 'estatePlan16',
                    text: 'Have you explored a permanent/whole life insurance policy to help cover your estate tax liability upon death?',
                percentage: 0.03,
                strength: 'You\'ve determined if whole life insurance is right for you',
                focus: 'Read up on the benefits of whole life insurance to determine if it\'s right for you',
                notApplicableOptionId : '4',
                options: {
                    '1': {id: '1', text: 'Yes, I have coverage', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve looked into it', coefficient: 0.7, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, I have not', coefficient: 0, image: 'no.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            estatePlan17: {
                id: 'estatePlan17',
                    text: 'Have you considered distributing or gifting inheritance to your family while you are alive?',
                percentage: 0.03,
                strength: 'You\'ve considered gifting inheritance while you are still alive',
                focus: 'Determine if you would like to gift inheritance while you are still alive',
                options: {
                    '1': {id: '1', text: 'Yes, I have a plan already', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I do not plan on doing this yet', coefficient: 1, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan18: {
                id: 'estatePlan18',
                    text: 'Have you determined if a trust is right for you?',
                percentage: 0.03,
                strength: 'You\'ve determined if a Trust is right for you',
                focus: 'Read up on the benefits of a Trust and determine if it\'s right for you',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it is not right for me', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to do more research', coefficient: 0, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan19: {
                id: 'estatePlan19',
                    text: 'Do you know how your money will be distributed when you pass?',
                percentage: 0.04,
                strength: 'You\'ve determined how your money will be distributed when you pass',
                focus: 'Determine how your money will be distributed when you pass',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            estatePlan20: {
                id: 'estatePlan20',
                    text: 'Do you have beneficiaries for your registered accounts (RRSP, TFSA, RRIF, etc.)?',
                percentage: 0.05,
                strength: 'You have beneficiaries for your registered accounts',
                focus: 'Select beneficiaries for your registered accounts (RRSP, TFSA, RRIF)',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Not yet but I know my beneficiaries', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
        }
    },
    psychologyOfRetirement: {
        id: 'psychologyOfRetirement',
        title: 'Psychology of Retirement',
        subTitle: 'This questionnaire will help you figure out Psychology of Retirement',
        colour: 'green',
        bannerColour: 'psychologyOfRetirement',
        questions: {
            psychologyOfRetirement1: {
                id: 'psychologyOfRetirement1',
                text: 'Are you ready to stop working?',
                percentage: 0.14,
                strength: 'You know that you\'re done working',
                focus: 'Decide if you\'re ready to stop working',
                options: {
                    '1': {id: '1', text: 'Yes, I\'m ready', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I need to work a little longer', coefficient: 0.5, image: 'reassess_later.svg'},
                    '3': {id: '3', text: 'No, I\'m not ready yet', coefficient: 0, image: 'no.svg'},
                    '4': {id: '4', text: 'I have to retire', coefficient: 1, image: 'option2.svg'},
                }
            },
            psychologyOfRetirement2: {
                id: 'psychologyOfRetirement2',
                    text: 'Do you know how you will fill your time in retirement?',
                percentage: 0.14,
                strength: 'You know what you want to do in retirement',
                focus: 'Figure out how you want to fill your time in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I know how', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.6, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, but I\'m ready for some free time', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Haven\'t thought about it', coefficient: 0, image: 'no.svg'}
                }
            },
            psychologyOfRetirement3: {
                id: 'psychologyOfRetirement3',
                text: 'Have you explored the things you want to learn in retirement?',
                percentage: 0.12,
                strength: 'You know the things you want to learn in retirement',
                focus: 'Explore things you want to learn in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good idea', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.6, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, but I\'m ready for some free time', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Haven\'t thought about it', coefficient: 0, image: 'no.svg'}
                }
            },
            psychologyOfRetirement4: {
                id: 'psychologyOfRetirement4',
                text: 'Do you want to continue working in some capacity after you retire?',
                percentage: 0.07,
                strength: 'You know if you want to work in retirement',
                focus: 'Decide if you want to work in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I hope to', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, I\'m done working', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'If the right opportunity presents itself', coefficient: 1, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I\'d have to think about it more', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'Haven\'t thought about it', coefficient: 0, image: 'no.svg'}
                }
            },
            psychologyOfRetirement5: {
                id: 'psychologyOfRetirement5',
                    text: 'Have you discussed your retirement hopes and dreams with your partner to ensure you\'re on the same page?',
                percentage: 0.13,
                strength: 'You and your partner are on the same page',
                focus: 'Ensure you and your partner are on the same page',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, we\'re aligned', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but there\'s more to figure out', coefficient: 0.6, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'Not yet', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'We\'re not on the same page', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            psychologyOfRetirement6: {
                id: 'psychologyOfRetirement6',
                text: 'Do you have a daily or weekly routine that you would like to like to help structure your newfound time?',
                percentage: 0.11,
                strength: 'You have structure to your days',
                focus: 'Set up a form of routine or structure',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good routine', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I can still improve it', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have basic structure', coefficient: 0.6, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'I don\'t like having a routine', coefficient: 1, image: 'no.svg'},
                }
            },
            psychologyOfRetirement7: {
                id: 'psychologyOfRetirement7',
                text: 'Do you have a close group of friends that you plan on spending time within retirement?',
                percentage: 0.10,
                strength: 'You have people you want to spend time with',
                focus: 'Consider who you want to spend your time with in retirement',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve got a good group of friends', coefficient: 1, image: 'friends1.svg'},
                    '3': {id: '3', text: 'I have a few friends', coefficient: 0.75, image: 'friends2.svg'},
                    '4': {id: '4', text: 'No, I wouldn\'t say close friends', coefficient: 0.1, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            psychologyOfRetirement8: {
                id: 'psychologyOfRetirement8',
                text: 'Do your family and friends live close by?',
                percentage: 0.06,
                strength: 'Your friends or family live close by',
                focus: 'Plan time for when to see family that lives far away',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, they live close by', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but they live close enough', coefficient: 1, image: 'friends1.svg'},
                    '3': {id: '3', text: 'We are fairly spread out', coefficient: 0.6, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, they live far away', coefficient: 0.1, image: 'no.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            psychologyOfRetirement9: {
                id: 'psychologyOfRetirement9',
                text: 'Do you have an understanding of your ethics and your personal identity?',
                percentage: 0.09,
                strength: 'You have an understanding of your ethics and identity',
                focus: 'Reflect on your own ethics, identity and what makes you, you',
                options: {
                    '1': {id: '1', text: 'Yes, a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have a good sense', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I think I do', coefficient: 0.75, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'I could take time to focus on that', coefficient: 0.1, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Not Yet', coefficient: 0, image: 'no.svg'},
                }
            },
            psychologyOfRetirement10: {
                id: 'psychologyOfRetirement10',
                text: 'Do you make new friends easily?',
                percentage: 0.04,
                strength: 'You make friends easily',
                focus: 'Try to think of ways to meet some new people',
                options: {
                    '1': {id: '1', text: 'Yes, very easily', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I do', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'As easily as anyone else, I guess', coefficient: 0.75, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I could do a bit better', coefficient: 0.1, image: 'vague_idea.svg'},
                }
            },
        }
    },
    financialPlan: {
        id: 'financialPlan',
        title: 'Financial Plan 1/3',
        subTitle: 'This questionnaire will help you figure out financial plan',
        colour: 'blue',
        bannerColour: 'financialPlanning',
        questions: {
            financialPlan1: {
                id: 'financialPlan1',
                text: 'How confident are you in your financial plan?',
                percentage: 0.06,
                strength: 'You have an updated Will in place',
                focus: 'Ensure you have an up to date Will in place',
                options: null,
                isSliderBar: true
            },
            financialPlan2: {
                id: 'financialPlan2',
                text: 'Is your financial plan cash flow based?  (considers all income, expenses & tax implications)',
                percentage: 0.05,
                strength: 'Your plan is cash flow based',
                focus: 'Consider all cash flows into your plan',
                linkText: 'What is cash flow based?',
                linkOption: 'https://www.linkedin.com/pulse/cash-flow-vs-goal-based-planning-larry-breck-bell-cfp-chfc-/',
                options: {
                    '1': {id: '1', text: 'Yes, it is', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'It considers most cash flows', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'Somewhat', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, it is not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'What is cash flow based?', coefficient: 0, image: 'what_is_that.svg'}
                }
            },
            financialPlan3: {
                id: 'financialPlan3',
                text: 'Do you have any outstanding debt?',
                percentage: 0.06,
                strength: 'You do not have any outstanding debt',
                focus: 'Work on taking care of your outstanding debt',
                options: {
                    '1': {id: '1', text: 'No, I do not', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Only my mortgage', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'Almost everything paid off', coefficient: 0.5, image: 'understand.svg'},
                    '4': {id: '4', text: 'Yes, I have some', coefficient: 0.1, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Yes, I have quite a bit', coefficient: 0, image: 'no.svg'}
                }
            },
            financialPlan4: {
                id: 'financialPlan4',
                text: 'Are you aware of the benefits and characteristics of different account types? (e.g. RRIF, LIF, RRSP, TFSA)',
                percentage: 0.05,
                strength: 'You are confident in your financial planner',
                focus: 'Find a planner you are confident in',
                options: {
                    '1': {id: '1', text: 'Yes, I am', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.9, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'What are those?', coefficient: 0, image: 'what_is_that.svg'}
                }
            },
            financialPlan5: {
                id: 'financialPlan5',
                text: 'Do you have someone that has access to your accounts, essential documents, and passwords in case of emergency?',
                percentage: 0.04,
                strength: 'You have someone who can access your accounts and essential documents',
                focus: 'Select someone you trust to have access to your accounts and essential documents',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have to confirm details', coefficient: 0.75, image: 'vague_idea.svg'},
                    '3': {id: '3', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan6: {
                id: 'financialPlan6',
                text: 'Have you introduced your Power of Attorney or next of kin to your financial professionals?',
                percentage: 0.04,
                strength: 'You have introduced your financial professionals to your next of kin',
                focus: 'Introduce your financial professionals to your Powers of Attorney or next of kin',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but they could meet again', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, not all of them', coefficient: 0.1, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan7: {
                id: 'financialPlan7',
                text: 'Have you taken inventory of all your valuable assets?',
                percentage: 0.05,
                strength: 'You have taken inventory of your assets',
                focus: 'Take inventory of all of your valuable assets',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan8: {
                id: 'financialPlan8',
                text: 'Does your estate cover all outstanding debt?',
                percentage: 0.07,
                strength: 'You are confident in your financial planner',
                focus: 'Ensure you are confident in your financial professional',
                options: null,
                isSliderBar: true
            },
            financialPlan9: {
                id: 'financialPlan9',
                text: 'How often do you review your financial plan?',
                percentage: 0.05,
                strength: 'You review your plan often',
                focus: 'Review your plan at least once per year',
                options: {
                    '1': {id: '1', text: 'Multiple times a year', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Every year', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Every couple of years', coefficient: 0.6, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Every five years', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Never', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan10: {
                id: 'financialPlan10',
                text: 'Have you determined if you should pay off your mortgage before retiring?',
                percentage: 0.04,
                strength: 'You\'ve made a decision on your mortgage',
                focus: 'Determine if you should pay off your mortgage before retiring',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'My mortgage is already paid off', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have', coefficient: 0.9, image: 'option2.svg'},
                    '3': {id: '3', text: 'I\'ve given it some thought', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            financialPlan11: {
                id: 'financialPlan11',
                text: 'Do you know which investments are most ideal to draw on first in retirement?',
                percentage: 0.04,
                strength: 'You know which investments to draw down first',
                focus: 'Decide which investments are most ideal to draw down first',
                options: {
                    '1': {id: '1', text: 'Yes, I know', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan12: {
                id: 'financialPlan12',
                text: 'Do you know the optimal amount you should withdraw each year from your portfolio?',
                percentage: 0.04,
                strength: 'You review your will often',
                focus: 'You review your will every 3 to 5 years',
                options: {
                    '1': {id: '1', text: 'Yes, I know', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan13: {
                id: 'financialPlan13',
                text: 'Do you know how much you spend on average each month?',
                percentage: 0.05,
                strength: 'You have someone who can access your accounts and essential documents',
                focus: 'Select someone you trust to have access to your accounts and essential documents',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to calculate that', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan14: {
                id: 'financialPlan14',
                text: 'Have you considered how your spending will change in retirement?',
                percentage: 0.05,
                strength: 'You have an understanding of how your spending may change in retirement',
                focus: 'Consider how your spending may change in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I\'ve thought about it a bit', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan15: {
                id: 'financialPlan15',
                text: 'Do you have budget that allocates "buckets" for different expenses in retirement? (e.g. travel, clothing, dining, etc.)',
                percentage: 0.05,
                strength: 'You have a budget for different expenses',
                focus: 'Set a budget for different areas of spending',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a basic budget', coefficient: 0.7, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I\'ve thought about it a bit', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan16: {
                id: 'financialPlan16',
                text: 'Do you have an emergency fund?',
                percentage: 0.06,
                strength: 'You have an emergency fund',
                focus: 'Create an emergency fund for unexpected expenses',
                options: {
                    '1': {id: '1', text: 'Yes, I have a large emergency fund', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I do', coefficient: 0.7, image: 'option2.svg'},
                    '3': {id: '3', text: 'Yes, but not as big as it could be', coefficient: 0, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I\'ve got some money put aside', coefficient: 1, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 1, image: 'no.svg'},
                }
            },
            financialPlan17: {
                id: 'financialPlan17',
                text: 'Do you know how long your savings will last?',
                percentage: 0.06,
                strength: 'You have an idea of how long your savings will last',
                focus: 'Determine how long your savings should last you',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to calculate that', coefficient: 1, image: 'no.svg'},
                }
            },
            financialPlan18: {
                id: 'financialPlan18',
                text: 'Have you considered the expenses of long-term care towards the end of your retirement?',
                percentage: 0.05,
                strength: 'You\'ve considered the cost of long-term care',
                focus: 'Look into the costs of long-term care',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve looked into the expenses', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I\'ve thought about it a bit', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan19: {
                id: 'financialPlan19',
                text: 'Have you considered distributing or gifting inheritance to your family while you are alive?',
                percentage: 0.04,
                strength: 'You\'ve considered gifting inheritance while you are still alive',
                focus: 'Determine if you would like to gift inheritance while you are still alive',
                options: {
                    '1': {id: '1', text: 'Yes, I have a plan already', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I do not plan on doing this yet', coefficient: 1, image: 'option2.svg'}, //SET OPTION2 instead of YES
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            financialPlan20: {
                id: 'financialPlan20',
                text: 'Have you thought about how inflation will affect both your savings and investments in retirement?',
                percentage: 0.05,
                strength: 'You\'ve thought about how inflation will affect your plan',
                focus: 'Consider how inflation will affect your plan',
                options: {
                    '1': {id: '1', text: 'Yes, I understand', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I\'ve thought about it a bit', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, I have to calculate that', coefficient: 0, image: 'no.svg'},
                }
            },
        }
    },
    taxPlan: {
        id: 'taxPlan',
        title: 'Tax Plan 2/3',
        subTitle: 'This questionnaire will help you figure out financial plan',
        colour: 'blue',
        bannerColour: 'financialPlanning',
        questions: {
            taxPlan1: {
                id: 'taxPlan1',
                text: 'Do you understand federal, provincial and marginal tax rates, and how they affect you?',
                percentage: 0.11,
                strength: 'You have an understanding of how you will be taxed',
                focus: 'Read up on different tax rates',
                linkText: 'What are those',
                linkOption: 'https://www.wealthsimple.com/en-ca/learn/tax-brackets-canada#how_to_identify_your_tax_bracket',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, it is not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'What are those?', coefficient: 0, image: 'what_is_that.svg'}
                }
            },
            taxPlan2: {
                id: 'taxPlan2',
                text: 'Do you know what your marginal tax rate and average tax rates will be?',
                percentage: 0.11,
                strength: 'You have an understanding of tax rates',
                focus: 'Read up on marginal and average tax rates',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            taxPlan3: {
                id: 'taxPlan3',
                text: 'Are you aware of the different tax minimization strategies that are available for retirees?',
                percentage: 0.12,
                strength: 'You are aware of tax minimization strategies',
                focus: 'Look into tax minimization strategies',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'understand.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'vague_idea.svg'},
                }
            },
            taxPlan4: {
                id: 'taxPlan4',
                text: 'Have you had a professional look at your tax situation in retirement?',
                percentage: 0.13,
                strength: 'You\'ve had a professional look at your taxes',
                focus: 'Have a professional look over your taxes',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have, but it was a while ago', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'Yes, but I would like a second opinion', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            taxPlan5: {
                id: 'taxPlan5',
                text: 'Do you understand the impact of government programs and clawbacks? (e.g. GIS program and OAS clawbacks)',
                percentage: 0.06,
                strength: 'You understand government programs and clawbacks',
                focus: 'Read up on government programs and clawbacks',
                linkText: 'What are those',
                linkOption: 'https://www.advisor.ca/tax/tax-news/understanding-clawbacks/',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'vague_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'no.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'What are those?', coefficient: 0, image: 'what_is_that.svg'},
                }
            },
            taxPlan6: {
                id: 'taxPlan6',
                text: 'Do you understand how different sources of income are taxed?',
                percentage: 0.11,
                strength: 'You understand how different sources of income are taxed',
                focus: 'Read up on how different sources of income are taxed',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            taxPlan7: {
                id: 'taxPlan7',
                text: 'Are you aware of the tax benefits from charitable donations?',
                percentage: 0.08,
                strength: 'You are aware of the tax benefits from charitable donations',
                focus: 'Read up on the tax benefits from charitable donations',
                options: {
                    '1': {id: '1', text: 'Yes, I am', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to explore it more', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I am not', coefficient: 0, image: 'no.svg'},
                }
            },
            taxPlan8: {
                id: 'taxPlan8',
                text: 'Do you know how your personal use properties or capital property are taxed once you decide to sell them during retirement (i.e. selling boats, classic cars, cottages)?',
                percentage: 0.08,
                strength: 'You have an understanding of the tax on capital property',
                focus: 'Read up on the tax implications on capital property',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to read up on that', coefficient: 0, image: 'no.svg'},
                }
            },
            taxPlan9: {
                id: 'taxPlan9',
                text: 'Have you considered how income splitting could work for you in retirement?',
                percentage: 0.08,
                strength: 'You\'ve decided if income splitting is right for you',
                focus: 'Consider if income splitting is right for you',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but I have an understanding', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            taxPlan10: {
                id: 'taxPlan10',
                text: 'Have you considered which investments and accounts to draw on first to minimize tax exposure?',
                percentage: 0.12,
                strength: 'You understand which investments to draw down first',
                focus: 'Decide which investments are most ideal to draw down first',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but I have an understanding', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I\'ve thought about it', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
        }
    },
    investments: {
        id: 'investments',
        title: 'Investments 3/3',
        subTitle: 'This questionnaire will help you figure out Investments',
        colour: 'blue',
        bannerColour: 'financialPlanning',
        questions: {
            investments1: {
                id: 'investments1',
                text: 'Do you have an investment policy statement? (A statement governing your investment strategy and goals)',
                percentage: 0.10,
                strength: 'You have an investment policy statement',
                focus: 'Create or improve your investment policy statement',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it hasn\'t been updated', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, but I have a good idea', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, but I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            investments2: {
                id: 'investments2',
                text: 'Are you comfortable with your current investment strategy?',
                percentage: 0.10,
                strength: 'You are comfortable with your current strategy',
                focus: 'Strengthen your strategy to ensure you are comfortable with it',
                options: {
                    '1': {id: '1', text: 'Yes, I am very comfortable', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I am comfortable', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Yes, but I need to review it', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'It needs to be updated', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, I am not', coefficient: 0, image: 'no.svg'},
                }
            },
            investments3: {
                id: 'investments3',
                text: 'Do you understand your rates of return?',
                percentage: 0.10,
                strength: 'You understand your rates of return',
                focus: 'Make sure you understand your rates of return',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'A little bit', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                }
            },
            investments4: {
                id: 'investments4',
                text: 'Do you understand all your portfolio management fees?',
                percentage: 0.10,
                strength: 'You understand your management fees',
                focus: 'Make sure you understand your management fees',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'A little bit', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, I do not', coefficient: 0, image: 'no.svg'}
                }
            },
            investments5: {
                id: 'investments5',
                text: 'Do you know if your investment strategy should change once you retire?',
                percentage: 0.10,
                strength: 'You\'ve determined how your strategy will change once you retire',
                focus: 'Determine how your strategy may change once you retire',
                linkText: 'What are those',
                linkOption: 'https://www.advisor.ca/tax/tax-news/understanding-clawbacks/',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'A little bit', coefficient: 0, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            investments6: {
                id: 'investments6',
                text: 'Do you have an understanding of your risk tolerance?',
                percentage: 0.10,
                strength: 'You understand your risk tolerance',
                focus: 'Determine your own risk tolerance',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'A little bit', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            investments7: {
                id: 'investments7',
                text: 'Do you have a diversified portfolio? (e.g. different asset classes, various industries)',
                percentage: 0.10,
                strength: 'You have a diversified portfolio',
                focus: 'Diversify your portfolio',
                options: {
                    '1': {id: '1', text: 'Yes, very diversified', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, fairly diversified', coefficient: 0.8, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, not very diversified', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'Not diversified at all', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'I don\'t know my portfolio holdings', coefficient: 0, image: 'what_is_that.svg'},
                }
            },
            investments8: {
                id: 'investments8',
                text: 'Do you know if your investments are on track to help fund your retirement?',
                percentage: 0.10,
                strength: 'Your investments are on track',
                focus: 'Meet with a professional to get your investments on track',
                options: {
                    '1': {id: '1', text: 'Yes, they are well on track', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, they are on track', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'They could be doing better', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, they need to be doing better', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'I don\'t know', coefficient: 0, image: 'what_is_that.svg'},
                }
            },
            investments9: {
                id: 'investments9',
                text: 'Have you utilized all your unused RRSP/TFSA contribution room?',
                percentage: 0.10,
                strength: 'Your RRSP and TFSAs are topped up',
                focus: 'Work to max out your RRSP and TFSA',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Almost topped up', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I still have some room', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have not', coefficient: 0, image: 'no.svg'},
                }
            },
            investments10: {
                id: 'investments10',
                text: 'Do you handle your investments by yourself or do you use a professional advisor?',
                percentage: 0.10,
                strength: 'You are comfortable with who is planning your investments',
                focus: 'Ensure you are confident in your planner',
                options: {
                    '1': {id: '1', text: 'I have a financial advisor', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have an advisor but I do some myself', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have an advisor but I am not happy', coefficient: 0, image: 'no.svg'},
                    '4': {id: '4', text: 'I handle my investments myself', coefficient: 0.5, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Someone else handles my investments', coefficient: 0.25, image: 'what_is_that.svg'},
                }
            },
        }
    },

    retirementIncome: {
        id: 'retirementIncome',
        title: 'Retirement Income',
        subTitle: 'This questionnaire will help you figure out Retirement Income',
        colour: 'blue',
        bannerColour: 'retirementIncome',
        questions: {
            retirementIncome1: {
                id: 'retirementIncome1',
                text: 'Are you counting on your home to help fund your retirement?',
                percentage: 0.09,
                strength: 'You\'ve determined if your home sale is part of your plan',
                focus: 'Determine if the sale of your home is a part of your savings plan',
                options: {
                    '1': {id: '1', text: 'No, I am not', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'It would help', coefficient: 0.8, image: 'income.svg'},
                    '3': {id: '3', text: 'Yes, I am', coefficient: 0.25, image: 'option2.svg'},
                    '4': {id: '4', text: 'I don\'t own a home, I rent', coefficient: 0, image: 'not_applicable.svg'},
                }
            },
            retirementIncome2: {
                id: 'retirementIncome2',
                    text: 'Do you know all the sources of your income in retirement?',
                percentage: 0.09,
                strength: 'You understand your sources of retirement income',
                focus: 'Look into your different sources of retirement income',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I still need to investigate that', coefficient: 0.25, image: 'no.svg'},
                }
            },
            retirementIncome3: {
                id: 'retirementIncome3',
                text: 'Have you calculated approximately what your retirement income will be?',
                percentage: 0.09,
                strength: 'You have an understanding of how much income you expect in retirement',
                focus: 'Calculate your approximate income from various sources',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to calculate that', coefficient: 0, image: 'no.svg'},
                }
            },
            retirementIncome4: {
                id: 'retirementIncome4',
                text: 'Have you considered an annuity as a form of income in retirement?',
                percentage: 0.08,
                strength: 'You\'ve determined if an annuity is right for you',
                focus: 'Look into if an annuity is right for you',
                linkText: 'What are annuities?',
                linkOption: 'https://www.canada.ca/en/financial-consumer-agency/services/retirement-planning/annuities.html',
                options: {
                    '1': {id: '1', text: 'Yes, I will be purchasing one', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I will not purchase one', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I\'ve thought about it, but don\'t know', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'What are annuities', coefficient: 0, image: 'what_is_that.svg'}
                }
            },
            retirementIncome5: {
                id: 'retirementIncome5',
                    text: 'Are you aware of all of the different sources of government benefits?',
                percentage: 0.09,
                strength: 'You understand your government benefits in retirement',
                focus: 'Read up on the various government benefits',
                options: {
                    '1': {id: '1', text: 'Yes, I am', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to do more research', coefficient: 0, image: 'no.svg'},
                }
            },
            retirementIncome6: {
                id: 'retirementIncome6',
                text: 'Are you aware of the benefits and characteristics of different account types? (e.g. RRIF, LIF, RRSP, TFSA)',
                percentage: 0.09,
                strength: 'You have structure to your days',
                focus: 'Set up a form of routine or structure',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good routine', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I can still improve it', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have basic structure', coefficient: 0.6, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'I don\'t like having a routine', coefficient: 1, image: 'no.svg'},
                }
            },
            retirementIncome7: {
                id: 'retirementIncome7',
                text: 'Do you know the ideal age for when you should start receiving your government benefits?',
                percentage: 0.09,
                strength: 'You\'ve determined your ideal age to receive government benefits',
                focus: 'Determine your ideal age for receiving your government benefits',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have a strong understanding', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            retirementIncome8: {
                id: 'retirementIncome8',
                text: 'Do you expect to receive income from an employer pension, savings plan and/or matching program?',
                percentage: 0.08,
                strength: 'You understand your employer pension or plan',
                focus: 'Determine if you have an employer pension or plan',
                notApplicableOptionId : '4',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, I don\'t', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I\'m not sure', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            retirementIncome9: {
                id: 'retirementIncome9',
                text: 'Have you determined if you should take your pension as annuity or lump sum?',
                percentage: 0.06,
                strength: 'You\'ve determined to take your pension in annuity or lump sum',
                focus: 'Determine if you should take your pension in annuity or lump sum',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            retirementIncome10: {
                id: 'retirementIncome10',
                text: 'Do you know all the important details of your pension? (i.e. amount, does it provide indexing, survivor benefit, etc.)',
                percentage: 0.08,
                strength: 'You understand the details of your pension',
                focus: 'Understand the details of your pension',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0.1, image: 'no.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 0.1, image: 'not_applicable.svg'},
                }
            },
            retirementIncome11: {
                id: 'retirementIncome11',
                text: 'Do you understand the impact inflation may have on your retirement income?',
                percentage: 0.08,
                strength: 'You have an understanding of how inflation will affect your income',
                focus: 'Look into how inflation will affect your retirement income',
                options: {
                    '1': {id: '1', text: 'Yes, I understand', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I\'ve thought about it a bit', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            retirementIncome12: {
                id: 'retirementIncome12',
                text: 'Do you plan on working in retirement in some capacity?',
                percentage: 0.08,
                strength: 'You\'ve determined if you want to work in retirement',
                focus: 'Determine if you want to work in some capacity in retirement',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, to supplement my income', coefficient: 1, image: 'income.svg'},
                    '2': {id: '2', text: 'Yes, for something to do', coefficient: 1, image: 'working.svg'},
                    '3': {id: '3', text: 'Yes, to try something I\'ve always wanted', coefficient: 1, image: 'option2.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 1, image: 'yes.svg'},
                }
            },
        }
    },
    travel: {
        id: 'travel',
        title: 'Travel',
        subTitle: 'This questionnaire will help you figure out travel',
        colour: 'turquoise',
        bannerColour: 'travel',
        questions: {
            travel1: {
                id: 'travel1',
                text: 'Do you have a travel plan for your retirement?',
                percentage: 0.12,
                strength: 'You have a travel plan in place',
                focus: 'Work towards developing a travel plan',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            travel2: {
                id: 'travel2',
                text: 'Do you have a budget set aside for travel?',
                percentage: 0.12,
                strength: 'You have a travel budget set aside',
                focus: 'Create a separate budget for travel',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have some put aside', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I can make it work', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            travel3: {
                id: 'travel3',
                text: 'Have you made a list of everywhere you want to go, and everything you want to see?',
                percentage: 0.13,
                strength: 'You have an understanding of the things you want to do and see',
                focus: 'Create a list of all the possible places you want to go and the things you want to do',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            travel4: {
                id: 'travel4',
                text: 'Have you thought of which destinations you might want to visit first?',
                percentage: 0.11,
                strength: 'You have an understanding of where you want to visit first',
                focus: 'Think about where you want to travel first and what can wait until later',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            travel5: {
                id: 'travel5',
                text: 'Have you thought about your travel insurance needs?',
                percentage: 0.10,
                strength: 'You have your travel insurance covered',
                focus: 'Look into travel insurance',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            travel6: {
                id: 'travel6',
                text: 'Are you comfortable with researching your own trips?',
                percentage: 0.10,
                strength: 'You have got the research covered',
                focus: 'Find someone to help you research your trips',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I am', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have someone to help plan', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I could use some help', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I am not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            travel7: {
                id: 'travel7',
                text: 'Have you considered guided trips and tours? ',
                percentage: 0.07,
                strength: 'You\'ve considered guided trips and tours',
                focus: 'Look into guided trips and tours to see if they are right for you',
                notApplicableOptionId : '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have and am interested', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I am not interested', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I\'ve thought about it', coefficient: 0.5, image: 'no.svg'},
                    '4': {id: '4', text: 'I haven\'t considered it yet', coefficient: 0, image: 'not_applicable.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            travel8: {
                id: 'travel8',
                text: 'Do you have a phone plan that allows you to use roaming while travelling?',
                percentage: 0.07,
                strength: 'You have your phone and roaming covered',
                focus: 'Look into a plan for your phone while travelling',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I need to look into better plans', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, I do not', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I haven\'t considered it yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            travel9: {
                id: 'travel9',
                text: 'Do you have someone to check on your home, or check on your animals,  while you are away?',
                percentage: 0.08,
                strength: 'You have someone to look in on your home while you\'re away',
                focus: 'Think about who can check in on your home and/or pets while you\'re away',
                notApplicableOptionId : '4',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, I do not', coefficient: 0, image: 'option2.svg'},
                    '3': {id: '3', text: 'I haven\'t considered it yet', coefficient: 0, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            travel10: {
                id: 'travel10',
                text: 'Do you have travel buddies or someone to travel with?',
                percentage: 0.10,
                strength: 'You have taken inventory of your valuable assets',
                focus: 'Take inventory of your valuable assets',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but I don\'t need to', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I haven\'t considered it yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
        }
    },
    livingDownsizing: {
        id: 'livingDownsizing',
        title: 'Living and Downsizing',
        subTitle: 'This questionnaire will help you figure out living and downsizing',
        colour: 'turquoise',
        bannerColour: 'livingDownsizing',
        questions: {
            livingDownsizing1: {
                id: 'livingDownsizing1',
                text: 'Do you know how long you want to stay in your current home?',
                percentage: 0.10,
                strength: 'You have an understanding of how long you want to stay in your current home',
                focus: 'Think about how long you want to stay in your current home',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve decided', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I will reassess later', coefficient: 0.08, image: 'reassess_later.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            livingDownsizing2: {
                id: 'livingDownsizing2',
                text: 'Do you know if you would like to move to another country or province?',
                percentage: 0.10,
                strength: 'You have an understanding if you\'d like to move out of province',
                focus: 'Think about if you may want to move out of province',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve made my decision', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'I\'ve thought about it, but I will reassess later',
                        coefficient: 0.75,
                        image: 'reassess_later.svg'
                    },
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, I haven\'t thought about it', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            livingDownsizing3: {
                id: 'livingDownsizing3',
                text: 'Have you thought about whether you would like a second home or timeshare?',
                percentage: 0.10,
                strength: 'You\'ve considered the option of a second home or timeshare',
                focus: 'Consider if you would be interested in a second home or time share',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve made my decision', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'I\'ve thought about it, but I will reassess later',
                        coefficient: 0.8,
                        image: 'reassess_later.svg'
                    },
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            livingDownsizing4: {
                id: 'livingDownsizing4',
                text: 'Do you have a primary residence or any secondary properties that will require maintenance?',
                percentage: 0.09,
                strength: 'You\'ve considered the maintenance of your properties',
                focus: 'Consider the maintenance of your properties, especially when you\'re older',
                notApplicableOptionId: '4',
                options: {
                    '1': {id: '1', text: 'Yes, but I can take care of them', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'Yes, at some point I will need help',
                        coefficient: 0.75,
                        image: 'option2.svg'
                    },
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            livingDownsizing5: {
                id: 'livingDownsizing5',
                text: 'Would you consider hiring extra help for maintenance? (e.g. lawn care, property management, etc.)',
                percentage: 0.10,
                strength: 'You\'ve considered extra help to assist with property maintenance',
                focus: 'Look into if hiring help to assist with property maintenance is a good idea for you',
                notApplicableOptionId: '4',
                options: {
                    '1': {id: '1', text: 'Yes, at some point', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, I don\'t need to', coefficient: 1, image: 'option2.svg'},
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            livingDownsizing6: {
                id: 'livingDownsizing6',
                text: 'Are you an Empty Nester or are just looking to downsize in retirement?',
                percentage: 0.10,
                strength: 'You\'ve made your decision on downsizing',
                focus: 'Consider if downsizing your home is right for you',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, at some point', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'Yes, but I will reassess later',
                        coefficient: 0.8,
                        image: 'reassess_later.svg'
                    },
                    '3': {id: '3', text: 'No, I am not looking to downsize', coefficient: 1, image: 'option2.svg'},
                    '4': {
                        id: '4',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            livingDownsizing7: {
                id: 'livingDownsizing7',
                text: 'Have you given thought to long-term care towards the end of your retirement?',
                percentage: 0.10,
                strength: 'You\'ve looked into the cost and logistics of long-term care in the future',
                focus: 'Look into the cost and logistics of long-term care in the future',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve thought about it', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'Yes, but I have to look into it more',
                        coefficient: 0.75,
                        image: 'good_idea.svg'
                    },
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            livingDownsizing8: {
                id: 'livingDownsizing8',
                text: 'Have you considered storage for your things if you downsize?',
                percentage: 0.10,
                strength: 'You\'ve considered storage options for if you move',
                focus: 'Look into storage options for if you move or downsize',
                options: {
                    '1': {id: '1', text: 'Yes, I\'ve thought about it', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'Yes, but I have to look into it more',
                        coefficient: 0.75,
                        image: 'good_idea.svg'
                    },
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            livingDownsizing9: {
                id: 'livingDownsizing9',
                text: 'Have you considered renting instead of ownership in retirement?',
                percentage: 0.11,
                strength: 'You\'ve made your decision on renting or ownership in retirement',
                focus: 'Consider the pros and cons of both renting and ownership in retirement',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I know my decision', coefficient: 1, image: 'yes.svg'},
                    '2': {
                        id: '2',
                        text: 'Yes, but I will reassess later',
                        coefficient: 0.8,
                        image: 'reassess_later.svg'
                    },
                    '3': {
                        id: '3',
                        text: 'I have to give it more thought',
                        coefficient: 0.25,
                        image: 'more_thought.svg'
                    },
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            livingDownsizing10: {
                id: 'livingDownsizing10',
                text: 'Do you live close to someone who can help you when you are older?',
                percentage: 0.10,
                strength: 'You have someone who can assist you when you get older',
                focus: 'Think about who can assist you when you get older',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I will reassess this later', coefficient: 0.25, image: 'reassess_later.svg'},
                    '3': {id: '3', text: 'No, I do not', coefficient: 0, image: 'option2.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },

        },
    },
    insurance: {
        id: 'insurance',
        title: 'Insurance',
        subTitle: 'This questionnaire will help you figure out Insurance',
        colour: 'blue',
        bannerColour: 'insurance',
        questions: {
            insurance1: {
                id: 'insurance1',
                text: 'Have you determined if you could use life insurance in retirement?',
                percentage: 0.11,
                strength: 'You have an understanding of how long you want to stay in your current home',
                focus: 'Think about how long you want to stay in your current home',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I do not need it', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have good idea', coefficient: 0.75, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'I have to think about it more', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            insurance2: {
                id: 'insurance2',
                text: 'Do you have an insurance plan for medical expenses and other extended healthcare benefits after you stop working?',
                percentage: 0.11,
                strength: 'You have an insurance plan in place for when you stop working',
                focus: 'Ensure that you have an insurance plan in place for after you stop working',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but I have it covered', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, but I\'ve researched it', coefficient: 0.75, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have not looked yet', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            insurance3: {
                id: 'insurance3',
                text: 'Do you have a strong understanding of the insurance policies that you plan to use in retirement?',
                percentage: 0.10,
                strength: 'You have an understanding of the details of your insurance policy',
                focus: 'Read up on the details of you insurance policy',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good understanding', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague understanding', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            insurance4: {
                id: 'insurance4',
                text: 'Have you determined if whole life, or permanent, insurance can help your loved ones handle estate tax and funeral expenses?',
                percentage: 0.09,
                strength: 'You\'ve determined if whole/permanent life insurance is right for you',
                focus: 'Read up on the benefits of whole/permanent life insurance to see if it\'s right for you',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I do not need it', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have to think about it more', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            insurance5: {
                id: 'insurance5',
                text: 'Do you have a travel insurance plan in place?',
                percentage: 0.09,
                strength: 'You have a travel insurance plan in place',
                focus: 'Look into travel insurance plans',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, but I have it covered', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, but I\'ve researched it', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'not_applicable.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            insurance6: {
                id: 'insurance6',
                text: 'Have you determined a plan for dental care, if your plan does not cover it?',
                percentage: 0.10,
                strength: 'You have a plan for dental care',
                focus: 'Ensure that you have a plan or a decision around dental care',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'I am covered', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have it covered', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'No, but I\'ve researched it', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', txt: 'I have to think about it more', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'Not interested', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            insurance7: {
                id: 'insurance7',
                text: 'Have you checked your province\'s Drug Benefit Program to determine if you will require additional prescription drug coverage?',
                percentage: 0.10,
                strength: 'You\'ve determined if you will require additional drug coverage',
                focus: 'Determine if you require additional prescription drug coverage',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have but do not need it', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I need additional coverage', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'Yes, and I am worried about the costs', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            insurance8: {
                id: 'insurance8',
                text: 'If applicable, does your partner or spouse have the coverage they require?',
                percentage: 0.10,
                strength: 'You\'ve determined if your partner has the coverage they require',
                focus: 'Determine if your partner has the coverage they require',
                notApplicableOptionId: '4',
                options: {
                    '1': {id: '1', text: 'Yes, they do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, they do not', coefficient: 0, image: 'no.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'Not Applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            insurance9: {
                id: 'insurance9',
                text: 'If applicable, do your children have the coverage they require if they are no longer on your insurance plan from employment?',
                percentage: 0.10,
                strength: 'You\'ve determined if your child/children have the coverage they require',
                focus: 'Determine if your child/children have the coverage they require',
                notApplicableOptionId: '4',
                options: {
                    '1': {id: '1', text: 'Yes, they do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'No, they do not', coefficient: 0.8, image: 'no.svg'},
                    '3': {id: '3', text: 'I have to look into it', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            insurance10: {
                id: 'insurance10',
                text: 'If you plan on moving out of the province or out of the country, have you determined what additional coverage you will require?',
                percentage: 0.10,
                strength: 'You\'ve determined if you need additional coverage if you move out of province',
                focus: 'Determine if you need additional coverage if you move out of province',
                options: {
                    '1': {id: '1', text: 'Yes, I have it covered', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I need to research more', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to think about it more', coefficient: 0.25, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'I have to look into it', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not Applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },

        },
    },
    healthcare: {
        id: 'healthcare',
        title: 'Healthcare',
        subTitle: 'This questionnaire will help you figure out Healthcare',
        colour: 'blue',
        bannerColour: 'healthcareDentalPhysiotherapy',
        questions: {
            healthcare1: {
                id: 'healthcare1',
                text: 'Are you aware of any medical concerns?',
                percentage: 0.10,
                strength: 'You are aware of your medical standing',
                focus: 'Visit your doctor to assess your medical standing',
                options: {
                    '1': {id: '1', text: 'Yes, I am aware', coefficient: 1, image: 'option2.svg'},
                    '2': {id: '2', text: 'Yes, I am dealing with them', coefficient: 1, image: 'understand.svg'},
                    '3': {id: '3', text: 'I do not have any concerns', coefficient: 1, image: 'yes.svg'},
                    '4': {id: '4', text: 'I haven\'t been to the doctor\'s in a while', coefficient: 0.2, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, I do not know', coefficient: 0, image: 'no.svg'}
                }
            },
            healthcare2: {
                id: 'healthcare2',
                text: 'Are you happy with your current physician?',
                percentage: 0.11,
                strength: 'You are happy with your physician',
                focus: 'Find a physician that you are comfortable with',
                options: null,
                isSliderBar: true
            },
            healthcare3: {
                id: 'healthcare3',
                text: 'Do you have a budget set aside for unexpected medical expenses?',
                percentage: 0.10,
                strength: 'You have a budget for medical expenses',
                focus: 'Set aside a budget for unexpected medical expenses',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good budget', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it could be a bit larger', coefficient: 0.7, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I don\'t have a budget but I have enough', coefficient: 0.8, image: 'option2.svg'},
                    '4': {id: '4', text: 'I don\'t have a budget', coefficient: 0.2, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, Not yet', coefficient: 0, image: 'no.svg'}
                }
            },
            healthcare4: {
                id: 'healthcare4',
                text: 'Have you looked into the logistics and cost of long-term care options when it\'s needed?',
                percentage: 0.08,
                strength: 'You\'ve looked into the cost and logistics of long-term care in the future',
                focus: 'Look into the cost and logistics of long-term care in the future',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, and I am worried about the costs', coefficient: 0.7, image: 'vague_idea.svg'},
                    '3': {id: '3', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, but I will revisit this later', coefficient: 0.08, image: 'reassess_later.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 1, image: 'not_applicable.svg'}
                }
            },
            healthcare5: {
                id: 'healthcare5',
                text: 'Do you have a medical, or healthcare, Power of Attorney?',
                percentage: 0.11,
                strength: 'You\'ve selected a medical Power of Attorney',
                focus: 'Ensure you select a medical Power of Attorney who knows your wishes',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it needs to be changed', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I\'ve thought about it', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            healthcare6: {
                id: 'healthcare6',
                text: 'Have you discussed your healthcare wishes (i.e. do not resuscitate order, etc) with your family or loved ones?',
                percentage: 0.10,
                strength: 'You\'ve discussed your medical wishes with your family',
                focus: 'Have a family meeting to discuss your medical wishes',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, they are aware', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but I have to update them', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'They have some idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', txt: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            healthcare7: {
                id: 'healthcare7',
                text: 'How often do you visit your doctor for checkups?',
                percentage: 0.10,
                strength: 'You\'ve determined if you will require additional drug coverage',
                focus: 'Ensure you visit the doctor regularly',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Multiple times a year', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Once a year', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Every couple of years', coefficient: 0.8, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Every few years', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'Not as often as I should', coefficient: 0, image: 'not_applicable.svg'},
                }
            },
            healthcare8: {
                id: 'healthcare8',
                text: 'If applicable, are you and your partner or spouse aware of any medical concerns they may have?',
                percentage: 0.10,
                strength: 'You and your spouse/partner are aware of their medical standing',
                focus: 'Ensure that you and your spouse/partner are aware of their medical standing',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, we are aware', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, and we are dealing with them', coefficient: 1, image: 'no.svg'},
                    '3': {id: '3', text: 'They do not have any concerns', coefficient: 1, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'We do not know', coefficient: 1, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            healthcare9: {
                id: 'healthcare9',
                text: 'How would you rank your current mental health?',
                percentage: 0.10,
                strength: 'You are happy with your mental health at this moment',
                focus: 'Talk to family, friends a professional or read up on how you can improve your mental health',
                options: null,
                isSliderBar: true
            },
            healthcare10: {
                id: 'healthcare10',
                text: 'How would you rank your current lifestyle as it relates to your health?',
                percentage: 0.10,
                strength: 'You are happy with your current lifestyle as it relates to your health',
                focus: 'Ensure that you take steps to improve your lifestyle as it relates to your health',
                options: null,
                isSliderBar: true
            },

        },
    },
    personalWellness: {
        id: 'personalWellness',
        title: 'Personal Wellness',
        subTitle: 'This questionnaire will help you figure out Personal Wellness',
        colour: 'green',
        bannerColour: 'fitnessWellness',
        questions: {
            personalWellness1: {
                id: 'personalWellness1',
                text: 'How would you rate your current health regiment?',
                percentage: 0.11,
                strength: 'You are happy with your current health regiment',
                focus: 'Work towards improving your health regiment to where you are happy with it',
                options: null,
                isSliderBar: true
                },
            personalWellness2: {
                id: 'personalWellness2',
                text: 'Is exercise important to you?',
                percentage: 0.10,
                strength: 'Excercise is a part of your routine',
                focus: 'Focus on adding some exercise into your schedule',
                options: {
                    '1': {id: '1', text: 'Yes, very important', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, it is important', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Fairly important', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, not really', coefficient: 0, image: 'no.svg'},
                }
            },
            personalWellness3: {
                id: 'personalWellness3',
                text: 'Are you happy with your current diet?',
                percentage: 0.10,
                strength: 'You are happy with your current diet',
                focus: 'Work towards improving your diet to where you are happy with it',
                options: {
                    '1': {id: '1', text: 'Yes, very happy', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I\'m happy', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Fairly happy', coefficient: 0.6, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, I am not', coefficient: 0, image: 'no.svg'},
                }
            },
            personalWellness4: {
                id: 'personalWellness4',
                text: 'Are there any health/activity changes you would like to make in retirement?',
                percentage: 0.10,
                strength: 'You know if you need to maky any changes to your health routine in retirement',
                focus: 'Think about what health/activity changes you would like to make in retirement',
                options: {
                    '1': {id: '1', text: 'I do not need to make any changes', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I know what changes to make', coefficient: 0.9, image: 'option2.svg'},
                    '3': {id: '3', text: 'Yes, I have to think about it', coefficient: 0.6, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Yes, but I don\'t know what', coefficient: 0.25, image: 'no.svg'},
                }
            },
            personalWellness5: {
                id: 'personalWellness5',
                text: 'How would you rate your current sleep schedule?',
                percentage: 0.10,
                strength: 'You are happy with your current sleep schedule',
                focus: 'Work towards improving your sleep schedule and making sure you get enough of it',
                options: null,
                isSliderBar: true
            },
            personalWellness6: {
                id: 'personalWellness6',
                text: 'How often do you make an effort to get fresh air and sunlight?',
                percentage: 0.10,
                strength: 'You get lots of fresh air and sunlight',
                focus: 'Focus on making an active effort towards getting sunlight and fresh air daily',
                options: {
                    '1': {id: '1', text: 'Multiple times a day', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Daily', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Every other day', coefficient: 0.75, image: 'vague_idea.svg'},
                    '4': {id: '4', txt: 'A couple times a week', coefficient: 0.5, image: 'more_thought.svg'},
                    '5': {id: '5', txt: 'Every few days', coefficient: 0.5, image: 'more_thought.svg'},
                }
            },
            personalWellness7: {
                id: 'personalWellness7',
                text: 'How many days a week do you get more than 15 minutes of physical activity?',
                percentage: 0.10,
                strength: 'You get regular physical activity',
                focus: 'Focus on making an active effort towards getting at least 15 minutes of activity a day',
                options: {
                    '1': {id: '1', text: 'Almost every day', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Four days a week', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Three days a week', coefficient: 1, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Twice a week', coefficient: 0.7, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Not as much as I should', coefficient: 0, image: 'no.svg'},
                }
            },
            personalWellness8: {
                id: 'personalWellness8',
                text: 'How would you rank your current mental health?',
                percentage: 0.10,
                strength: 'You are happy with your mental health at this moment',
                focus: 'Talk to family, friends a professional or read up on how you can improve your mental health',
                options: null,
                isSliderBar: true
            },
            personalWellness9: {
                id: 'personalWellness9',
                text: 'How would you rate your current stress levels on average?',
                percentage: 0.10,
                strength: 'You are comfortable with your current stress levels',
                focus: 'Focus on ways to reduce your stress levels or visit your doctor to discuss steps you can take',
                options: {
                    '1': {id: '1', text: 'Not very stressed', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'As much as anyone else', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Stressed, but manageable', coefficient: 0.6, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Fairly stressed', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Very stressed', coefficient: 0, image: 'no.svg'},
                }
            },
            personalWellness10: {
                id: 'personalWellness10',
                text: 'Do you have a group or friends or acquaintances that you see often?',
                percentage: 0.09,
                strength: 'You\'ve determined if you need additional coverage if you move out of province',
                focus: 'Determine if you need additional coverage if you move out of province',
                options: {
                    '1': {id: '1', text: 'Yes, very often', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, fairly often', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Yes, here and there', coefficient: 1, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'Not that often', coefficient: 0.5, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'No, not really', coefficient: 0, image: 'no.svg'},
                }
            },
        },
    },
    socialChangeVolunteering: {
        id: 'socialChangeVolunteering',
        title: 'Social Change and Volunteering',
        subTitle: 'This questionnaire will help you figure out Social Change and Volunteering',
        colour: 'turquoise',
        bannerColour: 'socialChangeAndVolunteering',
        questions: {
            socialChangeVolunteering1: {
                id: 'socialChangeVolunteering1',
                text: 'Do you plan to volunteer some of your time in retirement?',
                percentage: 0.11,
                strength: 'You\'ve determined if you need additional coverage if you move out of province',
                focus: 'Determine if you need additional coverage if you move out of province',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, lots of it', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I do', coefficient: 1, image: 'yes2.svg'},
                    '3': {id: '3', text: 'Maybe', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, I do not', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering2: {
                id: 'socialChangeVolunteering2',
                text: 'Do you plan on donating to charitable organizations and causes in retirement?',
                percentage: 0.12,
                strength: 'You\'ve decided if you want to make charitable donations in retirement',
                focus: 'Think about if you want to, or are able to, make donations to charitable causes',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have to give it more thought', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Maybe', coefficient: 0.5, image: 'good_idea.svg'},
                    '4': {id: '4', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 0, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering3: {
                id: 'socialChangeVolunteering3',
                text: 'Have you identified causes, charities and/or community involvement that align with your values?',
                percentage: 0.10,
                strength: 'You are happy with your current diet',
                focus: 'Work towards improving your diet to where you are happy with it',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve looked into it', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering4: {
                id: 'socialChangeVolunteering4',
                text: 'Are you aware of the tax benefits from charitable donations?',
                percentage: 0.10,
                strength: 'You\'ve identified causes or charities that align with your own values',
                focus: 'Research charities and causes that align with your own values',
                options: {
                    '1': {id: '1', text: 'Yes, I am', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.9, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to explore it more', coefficient: 0.6, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I am not', coefficient: 0.25, image: 'no.svg'},
                }
            },
            socialChangeVolunteering5: {
                id: 'socialChangeVolunteering5',
                text: 'Have you considered an overseas volunteer opportunity?',
                percentage: 0.10,
                strength: 'You\'ve considered overseas volunteer opportunities',
                focus: 'Research overseas volunteer opportunities and decide if they\'re right for you',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have to give it more thought', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'No, not yet', coefficient: 1, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'Not interested', coefficient: 0.25, image: 'no.svg'},
                }
            },
            socialChangeVolunteering6: {
                id: 'socialChangeVolunteering6',
                text: 'Have you thought about what clothing, household items and/or sports equipment you could donate to a local organization?',
                percentage: 0.11,
                strength: 'You\'ve thought about or donated items to your local charities',
                focus: 'Think about items, food or clothing that you are able to donate to local charities',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '3': {id: '3', text: 'I\'ve already donated', coefficient: 0, image: 'yes2.svg'},
                    '4': {id: '4', txt: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', txt: 'Not interested', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering7: {
                id: 'socialChangeVolunteering7',
                text: 'Have you considered how your professional skills from working could benefit a charity or non-profit?',
                percentage: 0.08,
                strength: 'You\'ve considered how your professional skills could benefit charities or non-profits',
                focus: 'Think about any skills or abilities that you have that could benefit charities or non-profits',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '3': {id: '3', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '4': {id: '4', text: 'Not interested', coefficient: 1, image: 'vague_idea.svg'},
                }
            },
            socialChangeVolunteering8: {
                id: 'socialChangeVolunteering8',
                text: 'Have you considered adopting a foster animal?',
                percentage: 0.08,
                strength: 'You\'ve considered adopting a foster animal',
                focus: 'Consider adopting or fostering an animal in need',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have to give it more thought', coefficient: 0.5, image: 'option2.svg'},
                    '3': {id: '3', text: 'I already have a pet', coefficient: 0, image: 'pet.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not interested', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering9: {
                id: 'socialChangeVolunteering9',
                text: 'Have you talked to your friends or spouse/partner to see if they would like to volunteer with you?',
                percentage: 0.10,
                strength: 'You\'ve talked to your friends and family about volunteer opportunities together',
                focus: 'Speak with your friends or family to see if there are volunteering opportunities you can do together',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'We have to talk more', coefficient: 1, image: 'more_thought.svg'},
                    '3': {id: '3', text: 'They are not interested', coefficient: 0.6, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0.25, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 0, image: 'not_applicable.svg'},
                }
            },
            socialChangeVolunteering10: {
                id: 'socialChangeVolunteering10',
                text: 'Have you considered cooking meals for shelters and those in need in your community?',
                percentage: 0.10,
                strength: 'You\'ve considered cooking meals for those in need',
                focus: 'Consider cooking meals for those in need in your community',
                options: {
                    '1': {id: '1', text: 'Yes, I already do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have', coefficient: 1, image: 'yes2.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not interested', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
        },
    },
    assistingNextGeneration: {
        id: 'assistingNextGeneration',
        title: 'Assisting the Next Generation',
        subTitle: 'This questionnaire will help you figure out Assisting the next generation',
        colour: 'blue',
        bannerColour: 'assistingNextGeneration',
        questions: {
            assistingNextGeneration1: {
                id: 'assistingNextGeneration1',
                text: 'Do you have an RESP or a budget set aside to assist your grand children or children\'s education costs?',
                percentage: 0.11,
                strength: 'You have an RESP or a budget set aside for educating the next generation',
                focus: 'Consider setting aside a budget or opening an RESP for the education of the next generation',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a budget, not an RESP', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'Maybe', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, I do not', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            assistingNextGeneration2: {
                id: 'assistingNextGeneration2',
                text: 'Do you have family photos, stories, recipes or family heirlooms that you want to pass down?',
                percentage: 0.12,
                strength: 'You\'ve collected family heirlooms and memories to pass down',
                focus: 'Think about what family heirlooms and memories can be passed down to the next generation',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have some but could collect more', coefficient: 0.75, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have to work on that', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            assistingNextGeneration3: {
                id: 'assistingNextGeneration3',
                text: 'Have you considered distributing or gifting inheritance to your family while you are alive?',
                percentage: 0.11,
                strength: 'You\'ve considered gifting inheritance while you are still alive',
                focus: 'Determine if you would like to gift inheritance while you are still alive',
                options: {
                    '1': {id: '1', text: 'Yes, I have a plan already', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I do not plan on doing this yet', coefficient: 0.75, image: 'option2.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            assistingNextGeneration4: {
                id: 'assistingNextGeneration4',
                text: 'Do you have skills and lessons that you want to share with your children or grandchildren?',
                percentage: 0.10,
                strength: 'You\'ve identified causes or charities that align with your own values',
                focus: 'Research charities and causes that align with your own values',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            assistingNextGeneration5: {
                id: 'assistingNextGeneration5',
                text: 'Do you plan on offering to take care of your grandchildren, or grand nieces and nephews, to give their parents a break?',
                percentage: 0.07,
                strength: 'You\'ve thought about offering to take care of your grandchildren/younger family members',
                focus: 'Consider if you can offer to take care of your grandchildren or grand nieces and nephews',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Likely', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I do not live close enough', coefficient: 0.25, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            assistingNextGeneration6: {
                id: 'assistingNextGeneration6',
                text: 'Have you considered searching your family genealogy and family history?',
                percentage: 0.10,
                strength: 'You\'ve thought about or donated items to your local charities',
                focus: 'Think about items, food or clothing that you are able to donate to local charities',
                options: {
                    '1': {id: '1', text: 'I\'ve done it already', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I\'ve thought about it', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'I am not interested', coefficient: 1, image: 'option2.svg'},
                }
            },
            assistingNextGeneration7: {
                id: 'assistingNextGeneration7',
                text: 'Have you determined if a Trust is right for you to set the next generation up financially?',
                percentage: 0.12,
                strength: 'You\'ve determined if a Trust is right for you',
                focus: 'Read up on the benefits of a Trust and determine if it\'s right for you',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, but it is not right for me', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to do more research', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            assistingNextGeneration8: {
                id: 'assistingNextGeneration8',
                text: 'Do you know how your money will be distributed when you pass?',
                percentage: 0.10,
                strength: 'You\'ve determined how your money will be distributed when you pass',
                focus: 'Determine how your money will be distributed when you pass',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a good idea', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have a vague idea', coefficient: 0.5, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0.25, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                }
            },
            assistingNextGeneration9: {
                id: 'assistingNextGeneration9',
                text: 'Have you considered ways to help your child/children with larger expenses (i.e. a home, a car, etc.)',
                percentage: 0.10,
                strength: 'You\'ve considered ways to help the next generations with larger expenses',
                focus: 'Speak with your friends or family to see if there are volunteering opportunities you can do together',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a vague idea', coefficient: 0.75, image: 'vague_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            assistingNextGeneration10: {
                id: 'assistingNextGeneration10',
                text: 'Have you considered when you are going to stop assisting your adult child/children with certain expenses?',
                percentage: 0.07,
                strength: 'You\'ve considered when to stop assisting your adult children/children with certain expenses',
                focus: 'Consider when to stop assisting your adult children/children with certain expenses',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I am no longer assisting them', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have', coefficient: 1, image: 'option2.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
        },
    },
    activitiesHobbies: {
        id: 'activitiesHobbies',
        title: 'Activities and Hobbies',
        subTitle: 'This questionnaire will help you figure out Activities and Hobbies',
        colour: 'green',
        bannerColour: 'activitiesHobbies',
        questions: {
            activitiesHobbies1: {
                id: 'activitiesHobbies1',
                text: 'Have you explored the things you want to learn in retirement?',
                percentage: 0.11,
                strength: 'You know the things you want to learn in retirement',
                focus: 'Explore things you want to learn in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good idea', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve given it some thought', coefficient: 0.6, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, but I\'m ready for some free time', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Haven\'t thought about it', coefficient: 0, image: 'no.svg'},
                }
            },
            activitiesHobbies2: {
                id: 'activitiesHobbies2',
                text: 'Do you have any hobbies and activities you want to purse, or continue, in retirement?',
                percentage: 0.12,
                strength: 'You have hobbies and activities that you want to pursue in retirement',
                focus: 'Think about hobbies and activities that you want to pursue in retirement',
                options: {
                    '1': {id: '1', text: 'Yes, I have lots I want to do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I have a few things I want to do and learn', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'I have to explore that more', coefficient: 0.25, image: 'vague_idea.svg'},
                    '5': {id: '5', text: 'Haven\'t thought about it', coefficient: 0, image: 'no.svg'},
                }
            },
            activitiesHobbies3: {
                id: 'activitiesHobbies3',
                text: 'Have you set aside a budget for more expensive hobbies and activities?',
                percentage: 0.11,
                strength: 'You have a budget set aside for your hobbies and activities',
                focus: 'Work towards setting aside a budget for your hobbies and activities',
                options: {
                    '1': {id: '1', text: 'Yes, I have a good budget', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I have some budget', coefficient: 0.8, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I don\'t have a budget but that\'s OK', coefficient: 0.4, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'I don\'t have a budget', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'I have to give it more thought', coefficient: 0, image: 'more_thought.svg'},
                }
            },
            activitiesHobbies4: {
                id: 'activitiesHobbies4',
                text: 'Do you have a group or friends or family who are planning on doing your hobbies with?',
                percentage: 0.10,
                strength: 'You have family and friends you plan to do some hobbies with',
                focus: 'Think about friends or family that you can do hobbies and activities with',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I haven\'t asked them yet', coefficient: 0, image: 'what_is_that.svg'},
                    '3': {id: '3', text: 'No, they don\'t share the same interests', coefficient: 0.1, image: 'vague_idea.svg'},
                    '4': {id: '4', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            activitiesHobbies5: {
                id: 'activitiesHobbies5',
                text: 'Have you thought of travel destinations that align with your hobbies and activities?',
                percentage: 0.10,
                strength: 'You\'ve thought about travel destinations that align with your hobbies',
                focus: 'Think about travel destinations that align with your hobbies',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I have it planned', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, I\'ve thought about it', coefficient: 1, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to explore that more', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, I have not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            activitiesHobbies6: {
                id: 'activitiesHobbies6',
                text: 'Do you have instructors, coaches, or groups that will help you improve your skills?',
                percentage: 0.10,
                strength: 'You\'ve thought about travel destinations that align with your hobbies',
                focus: 'Look into instructors and coaches that can help you improve your skills',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve looked into it', coefficient: 0.5, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to explore that more', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', txt: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', txt: 'Not interested', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            activitiesHobbies7: {
                id: 'activitiesHobbies7',
                text: 'Do you have any activities that you can share with your children or grandchildren?',
                percentage: 0.09,
                strength: 'You\'ve thought about activities that you can share with your children and grandchildren',
                focus: 'Think about activities that you can share with your children and grandchildren',
                options: {
                    '1': {id: '1', text: 'Yes, I do', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'Yes, we have some', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, I do not', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'Not applicable', coefficient: 1, image: 'not_applicable.svg'},
                }
            },
            activitiesHobbies8: {
                id: 'activitiesHobbies8',
                text: 'Have you considered pursuing further education in retirement?',
                percentage: 0.09,
                strength: 'You\'ve considered pursuing further education in retirement',
                focus: 'Consider if you\'d like to pursue further education in retirement',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I plan on it', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve thought about it', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.5, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'No, I do not plan to', coefficient: 1, image: 'option2.svg'},
                }
            },
            activitiesHobbies9: {
                id: 'activitiesHobbies9',
                text: 'Have you considered working in some capacity or starting your own business in retirement?',
                percentage: 0.09,
                strength: 'You\'ve considered working or starting your own business in retirement',
                focus: 'Consider if you\'d like to work in some capacity or start your own business in retirement',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, to supplement my income', coefficient: 1, image: 'income.svg'},
                    '2': {id: '2', text: 'Yes, for something to do', coefficient: 1, image: 'working.svg'},
                    '3': {id: '3', text: 'Yes, to try something I\'ve always wanted', coefficient: 1, image: 'yes.svg'},
                    '4': {id: '4', text: 'I have to give it more thought', coefficient: 0, image: 'more_thought.svg'},
                    '5': {id: '5', text: 'No way, I\'m done working', coefficient: 1, image: 'option2.svg'},
                }
            },
            activitiesHobbies10: {
                id: 'activitiesHobbies10',
                text: 'Have you considered joining a club, association or board of directors?',
                percentage: 0.09,
                strength: 'You\'ve considered joining a club, association or board of directors',
                focus: 'Consider joining a club, association or board of directors',
                notApplicableOptionId: '5',
                options: {
                    '1': {id: '1', text: 'Yes, I plan on it', coefficient: 1, image: 'yes.svg'},
                    '2': {id: '2', text: 'I\'ve thought about it', coefficient: 0.75, image: 'good_idea.svg'},
                    '3': {id: '3', text: 'I have to give it more thought', coefficient: 0.4, image: 'more_thought.svg'},
                    '4': {id: '4', text: 'No, not yet', coefficient: 0, image: 'no.svg'},
                    '5': {id: '5', text: 'No, I do not plan to', coefficient: 1, image: 'option2.svg'},
                }
            },
        },
    },
}
