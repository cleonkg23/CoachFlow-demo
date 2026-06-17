(() => {
  "use strict";

  const SOURCE_DATA = {"baselineDate":"2026-06-15","learners":[{"id":"L001","name":"Priya Sharma","initials":"PS","employer":"Brightwave Analytics","programme":"Data Analyst Level 4","coach":"Alex Mercer","attendanceRate":94,"engagementStatus":"Active","otjStatus":"On Track","evidenceStatus":"Logged","daysSinceLastIntervention":2,"lastIntervention":"2026-06-13","resolutionDate":"2026-08-01","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"26-30","riskScore":340,"priority":"low","recommendedAction":"Routine check-in. Learner is on track — confirm next EoL submission.","contacts":["Learner"],"nextSteps":["Send a brief encouragement message","Confirm next scheduled coaching session","Verify EoL log is up to date"],"draftMessage":{"subject":"Quick check-in on your Evidence of Learning","body":"Hi Priya,\n\nHope you're doing well! Just checking in — it looks like you're making great progress. Your learning activity is looking good and you're well ahead of your next deadline.\n\nIf you have any upcoming work you'd like to log as OTJ, now is a great time to add it. Feel free to book some time if you'd like to talk through anything.\n\nKeep it up!\nAlex Mercer"},"aiInsights":{"tone":"engaged","receptiveness":"High — responds promptly and asks follow-up questions during sessions","suggestedStyle":"Encouraging and forward-looking; focus on celebrating progress and setting stretch goals","engagementSummary":"Priya consistently replies within 24 hours and attends all scheduled sessions. Email tone is positive and proactive.","risks":[],"freshness":"2026-06-14T09:00:00Z"},"riskSignals":[{"label":"Days since last EoL","value":3,"severity":"ok","description":"Recent learning activity logged"},{"label":"Attendance rate","value":"94%","severity":"ok","description":"Consistently attending sessions"},{"label":"OTJ hours","value":"On Track","severity":"ok","description":"Hours logged are on pace for programme end"},{"label":"Email response time","value":"< 24h","severity":"ok","description":"Responds quickly to coach messages"}],"auditTimeline":[{"id":"EVT-L001-001","timestamp":"2026-05-20T10:15:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Early Intervention task created for EoL band 56-59","actor":"System"},{"id":"EVT-L001-002","timestamp":"2026-06-12T11:30:00Z","type":"SEND_EMAIL","label":"Check-in email sent","detail":"Early Intervention email sent to learner. Task marked pending follow-up.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-08-01","email":"priya.sharma@example.test","apprenticeEmail":"priya.sharma@example.test","amEmail":"manager.1@example.test","managerEmail":"manager.1@example.test","taskId":"L001","taskListId":"demo-list","daysSinceEoL":3,"daysUntilDue":""},{"id":"L002","name":"Tom Hargreaves","initials":"TH","employer":"Coastal Digital Ltd","programme":"Software Developer Level 4","coach":"Alex Mercer","attendanceRate":88,"engagementStatus":"Recovered","otjStatus":"On Track","evidenceStatus":"Logged","daysSinceLastIntervention":5,"lastIntervention":"2026-06-10","resolutionDate":"2026-07-20","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"31-35","riskScore":380,"priority":"low","recommendedAction":"Confirm recovery is sustained. Tom recently re-engaged after a quiet period — monitor for two more weeks before downgrading.","contacts":["Learner"],"nextSteps":["Acknowledge recent re-engagement positively","Set a clear expectation for the next evidence submission","Schedule a 2-week check-in"],"draftMessage":{"subject":"Great to see you back on track!","body":"Hi Tom,\n\nReally glad to see you've been logging your learning activity again recently — great work getting back on track.\n\nLet's keep the momentum going. Your next evidence submission should aim to be logged by the end of the month. If anything is getting in the way, drop me a line and we can find a way forward together.\n\nBest,\nAlex Mercer"},"aiInsights":{"tone":"neutral","receptiveness":"Moderate — after a quiet period, Tom has re-engaged but tone remains cautious","suggestedStyle":"Warm and low-pressure; avoid drawing attention to the previous gap — focus on what's next","engagementSummary":"Tom went silent for three weeks in May but has since logged two EoL activities and replied to the last coach message within 48 hours.","risks":["Previous disengagement pattern — monitor closely"],"freshness":"2026-06-13T14:00:00Z"},"riskSignals":[{"label":"Days since last EoL","value":5,"severity":"ok","description":"Recently re-engaged after a gap"},{"label":"Attendance rate","value":"88%","severity":"warning","description":"Two missed sessions in May"},{"label":"OTJ hours","value":"On Track","severity":"ok","description":"Hours recovered after re-engagement"},{"label":"Silence streak (prior)","value":"21 days","severity":"warning","description":"Had a 3-week silence period in May — now resolved"}],"auditTimeline":[{"id":"EVT-L002-001","timestamp":"2026-05-01T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Early Intervention task created — no EoL logged in 30 days","actor":"System"},{"id":"EVT-L002-002","timestamp":"2026-05-15T10:00:00Z","type":"SEND_EMAIL","label":"Check-in email sent","detail":"Early Intervention email sent after 3 weeks of no response","actor":"Coach"},{"id":"EVT-L002-003","timestamp":"2026-06-02T08:45:00Z","type":"INSIGHT_REFRESH","label":"Re-engagement detected","detail":"Learner logged EoL activity and responded to email — risk level reduced","actor":"System"}],"status":"Pending","interventionDueDate":"2026-07-20","email":"tom.hargreaves@example.test","apprenticeEmail":"tom.hargreaves@example.test","amEmail":"manager.2@example.test","managerEmail":"manager.2@example.test","taskId":"L002","taskListId":"demo-list","daysSinceEoL":5,"daysUntilDue":""},{"id":"L003","name":"Keiran Walsh","initials":"KW","employer":"Northgate Solutions","programme":"Data Analyst Level 4","coach":"Alex Mercer","attendanceRate":61,"engagementStatus":"At Risk","otjStatus":"Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":10,"lastIntervention":"2026-06-05","resolutionDate":"2026-07-10","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"26-30","riskScore":380,"priority":"low","recommendedAction":"Poor attendance is the primary concern. Contact learner and manager to discuss workload or personal barriers.","contacts":["Learner","Manager"],"nextSteps":["Email learner with specific session attendance figures","Ask manager if workload is the barrier","Propose a revised attendance plan"],"draftMessage":{"subject":"A quick check in on your Evidence of Learning","body":"Hi Keiran,\n\nI hope you're doing well! I just wanted to check in as I noticed it's been a little while since any Evidence of Learning was logged.\n\nIf you've been catching up on work or watching any session recordings, feel free to log those as part of your OTJ even if it's short reflections or notes. It all counts and helps build a great learning record.\n\nIf you'd like to talk through anything or need a hand getting back into the rhythm, you're welcome to book some time with me.\n\nKeep going — you've got this!\nAlex Mercer"},"aiInsights":{"tone":"distant","receptiveness":"Low — replies are brief and non-committal; does not initiate contact","suggestedStyle":"Direct and practical; offer concrete small steps rather than open-ended questions","engagementSummary":"Keiran's attendance has dropped significantly over the past 6 weeks. Email replies are short and delayed (3-5 days average). No proactive contact initiated.","risks":["Poor attendance trend — 61% over last 60 days","OTJ hours behind target","Low response rate to coach messages"],"freshness":"2026-06-10T16:00:00Z"},"riskSignals":[{"label":"Attendance rate","value":"61%","severity":"critical","description":"Well below 80% threshold — pattern worsening"},{"label":"OTJ hours","value":"Behind","severity":"warning","description":"Hours not on pace; risk of missing portfolio target"},{"label":"Days since last EoL","value":14,"severity":"warning","description":"Two weeks without evidence logged"},{"label":"Email response time","value":"3-5 days","severity":"warning","description":"Slow to respond to coach contact"}],"auditTimeline":[{"id":"EVT-L003-001","timestamp":"2026-05-15T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Early Intervention — attendance dropped below 75%","actor":"System"},{"id":"EVT-L003-002","timestamp":"2026-06-01T11:00:00Z","type":"SEND_EMAIL","label":"Check-in email sent","detail":"Early Intervention email sent; learner replied 4 days later with a brief acknowledgement","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-07-10","email":"keiran.walsh@example.test","apprenticeEmail":"keiran.walsh@example.test","amEmail":"manager.3@example.test","managerEmail":"manager.3@example.test","taskId":"L003","taskListId":"demo-list","daysSinceEoL":14,"daysUntilDue":""},{"id":"L004","name":"Amara Osei","initials":"AO","employer":"Pinnacle Consulting","programme":"Business Analyst Level 4","coach":"Alex Mercer","attendanceRate":79,"engagementStatus":"At Risk","otjStatus":"Significantly Behind","evidenceStatus":"Missing","daysSinceLastIntervention":7,"lastIntervention":"2026-06-08","resolutionDate":"2026-07-05","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"26-30","riskScore":365,"priority":"low","recommendedAction":"OTJ hours are significantly behind. Learner may not understand what counts as valid OTJ activity — clarify and provide examples.","contacts":["Learner"],"nextSteps":["Send examples of valid OTJ activities","Review recent work for retroactive logging opportunities","Set a specific OTJ logging target for the next 2 weeks"],"draftMessage":{"subject":"A quick check in on your Evidence of Learning","body":"Hi Amara,\n\nHope you're well. I wanted to touch base as your OTJ hours are looking a little lower than we'd like at this stage of your programme.\n\nThe good news is that lots of day-to-day work counts towards OTJ — things like attending meetings, preparing presentations, or completing work tasks related to your programme. I'd love to help you identify what you can log.\n\nCould we find 15 minutes this week to go through it together? Feel free to book using the link below.\n\nBest,\nAlex Mercer"},"aiInsights":{"tone":"neutral","receptiveness":"Moderate — engages when prompted but doesn't proactively log or update","suggestedStyle":"Educational and supportive; learner may lack clarity on requirements rather than motivation","engagementSummary":"Amara attends most sessions and responds to emails within 2-3 days, but OTJ logging has been minimal. Communication suggests she is busy with work and unaware of what qualifies as evidence.","risks":["OTJ hours significantly behind — at risk of failing EPA gateway","Evidence submissions missing for 18 days"],"freshness":"2026-06-12T10:00:00Z"},"riskSignals":[{"label":"OTJ hours","value":"Significantly Behind","severity":"critical","description":"At risk of not meeting EPA gateway requirement"},{"label":"Evidence submissions","value":"Missing","severity":"warning","description":"No EoL logged in 18 days"},{"label":"Attendance rate","value":"79%","severity":"warning","description":"Borderline — one missed session per month"},{"label":"Days since last EoL","value":18,"severity":"warning","description":"Two and a half weeks with no evidence"}],"auditTimeline":[{"id":"EVT-L004-001","timestamp":"2026-05-10T09:30:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Early Intervention — OTJ hours significantly below target","actor":"System"},{"id":"EVT-L004-002","timestamp":"2026-05-28T14:00:00Z","type":"SEND_EMAIL","label":"OTJ guidance email sent","detail":"Sent email with OTJ logging guidance and examples. Learner replied positively.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-07-05","email":"amara.osei@example.test","apprenticeEmail":"amara.osei@example.test","amEmail":"manager.4@example.test","managerEmail":"manager.4@example.test","taskId":"L004","taskListId":"demo-list","daysSinceEoL":18,"daysUntilDue":""},{"id":"L005","name":"Jamie Thornton","initials":"JT","employer":"Redwood Financial","programme":"Software Developer Level 4","coach":"Alex Mercer","attendanceRate":73,"engagementStatus":"At Risk","otjStatus":"Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":14,"lastIntervention":"2026-06-01","resolutionDate":"2026-07-01","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"26-30","riskScore":600,"priority":"medium","recommendedAction":"Involve apprentice manager. Learner has not responded to two previous emails. Manager may need to create protected learning time.","contacts":["Learner","Manager"],"nextSteps":["Email learner with manager CC'd","Request manager to confirm whether protected learning time exists","Set a 5-day response deadline"],"draftMessage":{"subject":"Action Needed: Learning Activity Required for Your Apprenticeship","body":"Dear Jamie,\n\nHope you're doing well. I wanted to check in as it's been 22 days since we last saw any learning activity from you.\n\nWe don't want you falling behind — or worse, your apprenticeship getting paused. To stay on track, you need to log at least one learning activity as soon as possible. This can be as simple as:\n\n• Attending your next coaching session or drop-in\n• Logging a short OTJ activity (e.g. portfolio update, self-study task, module review)\n• Submitting evidence of your latest work\n\nYour manager will be copied in here to support you in making time for this.\n\nIf there's anything stopping you from progressing, let me know — I'm happy to book a quick 1:1 to help.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"stressed","receptiveness":"Low — when Jamie does reply, messages reference being overwhelmed with project deadlines","suggestedStyle":"Empathetic and solution-focused; acknowledge work pressure, offer concrete small actions","engagementSummary":"Jamie's last two emails mentioned project pressure at work. Session attendance has dropped from 85% to 73% over 6 weeks. Manager involvement may help unblock protected learning time.","risks":["Work pressure preventing learning time","Two unanswered coach emails","OTJ hours falling behind"],"freshness":"2026-06-11T08:00:00Z"},"riskSignals":[{"label":"Days since last EoL","value":22,"severity":"warning","description":"Three weeks with no evidence logged"},{"label":"Attendance rate","value":"73%","severity":"warning","description":"Declining trend over 6 weeks"},{"label":"OTJ hours","value":"Behind","severity":"warning","description":"Pace insufficient for on-time completion"},{"label":"Unanswered emails","value":2,"severity":"warning","description":"Two coach emails sent without response"}],"auditTimeline":[{"id":"EVT-L005-001","timestamp":"2026-05-01T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Involve Manager — EoL gap growing, learner not responding","actor":"System"},{"id":"EVT-L005-002","timestamp":"2026-05-10T10:30:00Z","type":"SEND_EMAIL","label":"First intervention email sent","detail":"Early intervention email sent — no response received","actor":"Coach"},{"id":"EVT-L005-003","timestamp":"2026-05-24T11:00:00Z","type":"SEND_EMAIL","label":"Follow-up email sent","detail":"Second email sent; still no response — stage escalated to Involve Manager","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-07-01","email":"jamie.thornton@example.test","apprenticeEmail":"jamie.thornton@example.test","amEmail":"manager.5@example.test","managerEmail":"manager.5@example.test","taskId":"L005","taskListId":"demo-list","daysSinceEoL":22,"daysUntilDue":""},{"id":"L006","name":"Chloe Nkemdirim","initials":"CN","employer":"Horizon Retail Group","programme":"Digital Marketing Level 3","coach":"Alex Mercer","attendanceRate":80,"engagementStatus":"At Risk","otjStatus":"On Track","evidenceStatus":"Missing","daysSinceLastIntervention":26,"lastIntervention":"2026-05-20","resolutionDate":"2026-07-15","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"26-30","riskScore":660,"priority":"medium","recommendedAction":"Evidence submissions are missing despite acceptable attendance. Learner may be completing work but not logging it. Manager contact may help establish logging habit.","contacts":["Learner","Manager"],"nextSteps":["Contact learner to clarify what work is happening that could be logged","Ask manager to encourage evidence logging as part of regular 1:1s","Share a quick-start guide for evidence submission"],"draftMessage":{"subject":"Action Needed: Learning Activity Required for Your Apprenticeship","body":"Dear Chloe,\n\nHope you're doing well. I wanted to check in as it's been 30 days since we last saw any learning activity from you.\n\nWe don't want you falling behind — or worse, your apprenticeship getting paused. To stay on track, you need to log at least one learning activity as soon as possible.\n\nYour manager will be copied in here to support you in making time for this.\n\nIf there's anything stopping you from progressing, let me know — I'm happy to book a quick 1:1 to help.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"neutral","receptiveness":"Moderate — attends sessions and responds to messages but doesn't log independently","suggestedStyle":"Structured and habit-forming; provide checklists and clear deadlines rather than open invitations","engagementSummary":"Chloe attends sessions and responds to email but has not submitted any evidence for 30 days. She appears engaged verbally but does not follow through on logging tasks independently.","risks":["Evidence logging consistently missing despite attendance","30-day gap approaching escalation threshold"],"freshness":"2026-06-10T09:00:00Z"},"riskSignals":[{"label":"Evidence submissions","value":"Missing","severity":"critical","description":"No EoL logged for 30 days"},{"label":"Attendance rate","value":"80%","severity":"ok","description":"Attending sessions — gap is in logging, not attendance"},{"label":"Days since last EoL","value":30,"severity":"critical","description":"One month without evidence submission"},{"label":"OTJ hours","value":"On Track","severity":"ok","description":"Hours logged before the gap suggest she is working"}],"auditTimeline":[{"id":"EVT-L006-001","timestamp":"2026-05-01T08:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Involve Manager — 30-day evidence gap despite session attendance","actor":"System"},{"id":"EVT-L006-002","timestamp":"2026-05-16T10:00:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email sent to learner with manager CC'd. Manager confirmed they would discuss in next 1:1.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-07-15","email":"chloe.nkemdirim@example.test","apprenticeEmail":"chloe.nkemdirim@example.test","amEmail":"manager.6@example.test","managerEmail":"manager.6@example.test","taskId":"L006","taskListId":"demo-list","daysSinceEoL":30,"daysUntilDue":""},{"id":"L007","name":"Declan Foster","initials":"DF","employer":"Summit Tech Partners","programme":"Data Analyst Level 4","coach":"Alex Mercer","attendanceRate":68,"engagementStatus":"At Risk","otjStatus":"Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":30,"lastIntervention":"2026-05-16","resolutionDate":"2026-06-25","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"26-30","riskScore":530,"priority":"medium","recommendedAction":"Multiple risk signals present. Attendance declining, EoL gap growing. Coordinate with manager before escalating further.","contacts":["Learner","Manager"],"nextSteps":["Contact manager to understand workplace context","Set a clear expectation: EoL log within 5 days or escalation proceeds","Offer a same-week drop-in session"],"draftMessage":{"subject":"Action Needed: Learning Activity Required for Your Apprenticeship","body":"Dear Declan,\n\nHope you're doing well. I wanted to check in as it's been 28 days since we last saw any learning activity from you.\n\nWe don't want you falling behind. To stay on track, you need to log at least one learning activity as soon as possible.\n\nYour manager will be copied in here to support you in making time for this.\n\nLet's make sure you stay on track. Looking forward to hearing from you.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"distant","receptiveness":"Low-moderate — responds eventually but engagement is reluctant","suggestedStyle":"Clear and boundaried; set explicit expectations and timelines","engagementSummary":"Declan's attendance has been declining steadily. Emails are answered after several days with minimal detail. He has not proactively reached out to his coach in over 6 weeks.","risks":["Declining attendance trend","Slow email response pattern","No proactive contact from learner"],"freshness":"2026-06-09T11:00:00Z"},"riskSignals":[{"label":"Attendance rate","value":"68%","severity":"critical","description":"Declining — was 82% six weeks ago"},{"label":"Days since last EoL","value":28,"severity":"critical","description":"Four weeks without evidence"},{"label":"OTJ hours","value":"Behind","severity":"warning","description":"Hours not keeping pace with programme timeline"},{"label":"Silence streak","value":"11 days","severity":"warning","description":"11 days without any contact from learner"}],"auditTimeline":[{"id":"EVT-L007-001","timestamp":"2026-04-28T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Involve Manager task created — attendance and EoL gap identified","actor":"System"},{"id":"EVT-L007-002","timestamp":"2026-05-18T10:30:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email sent with manager CC. No substantive response received from learner.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-06-25","email":"declan.foster@example.test","apprenticeEmail":"declan.foster@example.test","amEmail":"manager.7@example.test","managerEmail":"manager.7@example.test","taskId":"L007","taskListId":"demo-list","daysSinceEoL":28,"daysUntilDue":""},{"id":"L008","name":"Yusuf Bakare","initials":"YB","employer":"Aldgate Systems","programme":"Software Developer Level 4","coach":"Alex Mercer","attendanceRate":52,"engagementStatus":"Inactive","otjStatus":"Significantly Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":null,"lastIntervention":"N/A","resolutionDate":"2026-06-22","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"31-35","riskScore":905,"priority":"high","recommendedAction":"Overdue and never formally contacted at this stage. Escalate immediately — contact learner, manager, and flag to senior coach.","contacts":["Learner","Manager","Senior Coach"],"nextSteps":["Send re-escalation email immediately","Attempt a direct phone call if no reply within 24 hours","Brief senior coach on situation","Set a 3-day hard deadline for response"],"draftMessage":{"subject":"Immediate action required: Your apprenticeship is at risk","body":"Dear Yusuf,\n\nI need to follow up urgently as we still haven't seen any learning activity from you. This means:\n\n• No attendance at coaching or delivery sessions\n• No OTJ logs (self-study, portfolio work, or module learning)\n\nAt this stage, your apprenticeship is at risk of being paused or ended. You now have three options:\n\n1. Submit a learning activity immediately — this could be a coaching session, a portfolio update, or an OTJ log.\n2. Request a Break in Learning (BIL) — if personal or professional challenges are impacting your progress, you can request a temporary pause.\n3. Confirm withdrawal — if you can't continue, we need to discuss formal withdrawal.\n\nPlease reply no later than 5 working days from today.\n\nWe're here to help, but we need immediate action to keep your apprenticeship moving forward.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"unresponsive","receptiveness":"Very low — no response to last three contact attempts","suggestedStyle":"Formal and urgent; clearly state consequences and provide three explicit options","engagementSummary":"Yusuf has not responded to any coach contact in over 6 weeks. No EoL logged in 45+ days. Attendance dropped to zero in the last month. Pattern is consistent with disengagement or personal difficulty.","risks":["Complete disengagement — no contact response","Attendance dropped to zero","At imminent risk of formal withdrawal"],"freshness":"2026-06-14T07:00:00Z"},"riskSignals":[{"label":"Days since last contact","value":"Never (at this stage)","severity":"critical","description":"Re-escalation stage reached with no prior formal contact at this level"},{"label":"Attendance rate","value":"52%","severity":"critical","description":"Zero attendance in the last 4 weeks"},{"label":"OTJ hours","value":"Significantly Behind","severity":"critical","description":"Cannot pass EPA gateway at current pace"},{"label":"Silence streak","value":"42 days","severity":"critical","description":"No response to any coach communication"}],"auditTimeline":[{"id":"EVT-L008-001","timestamp":"2026-04-15T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Rescalate task created — prior stage not responded to","actor":"System"},{"id":"EVT-L008-002","timestamp":"2026-04-20T11:00:00Z","type":"SEND_EMAIL","label":"Re-escalation email sent","detail":"Formal re-escalation email sent. No reply received.","actor":"Coach"},{"id":"EVT-L008-003","timestamp":"2026-05-05T14:00:00Z","type":"TASK_PATCH","label":"Task marked overdue","detail":"Resolution date passed with no learner action — task remains open","actor":"System"}],"status":"Pending","interventionDueDate":"2026-06-22","email":"yusuf.bakare@example.test","apprenticeEmail":"yusuf.bakare@example.test","amEmail":"manager.8@example.test","managerEmail":"manager.8@example.test","taskId":"L008","taskListId":"demo-list","daysSinceEoL":"","daysUntilDue":""},{"id":"L009","name":"Fatima Al-Hassan","initials":"FA","employer":"Meridian Insurance","programme":"Business Analyst Level 4","coach":"Alex Mercer","attendanceRate":65,"engagementStatus":"Inactive","otjStatus":"Significantly Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":56,"lastIntervention":"2026-04-20","resolutionDate":"2026-06-20","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"31-35","riskScore":855,"priority":"high","recommendedAction":"Overdue with no response in 35 days. Manager escalation is now essential. Set a hard deadline and document all contact attempts.","contacts":["Learner","Manager"],"nextSteps":["Send final manager-copied email with explicit deadline","Document all prior contact attempts","Prepare BIL or withdrawal paperwork if no response by deadline","Notify senior coach of situation"],"draftMessage":{"subject":"Action Needed: Learning Activity Required for Your Apprenticeship","body":"Dear Fatima,\n\nHope you're doing well. I wanted to check in as it's now been 35 days since we last saw any learning activity from you.\n\nWe don't want you falling behind — or worse, your apprenticeship getting paused. To stay on track, you need to log at least one learning activity as soon as possible.\n\nYour manager will be copied in here to support you in making time for this.\n\nIf there's anything stopping you from progressing, let me know — I'm happy to book a quick 1:1 to help.\n\nLet's make sure you stay on track. Looking forward to hearing from you.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"distant","receptiveness":"Very low — last response was a brief acknowledgement 5 weeks ago","suggestedStyle":"Formal with clear consequences; offer support options but set non-negotiable deadlines","engagementSummary":"Fatima engaged briefly in early May but has since gone silent. Prior emails were acknowledged with one-line responses. Attendance fell sharply after a reported change in team structure at her employer.","risks":["Overdue task — resolution date passed","35 days since any coach contact","Workplace structural change may have removed learning time"],"freshness":"2026-06-13T12:00:00Z"},"riskSignals":[{"label":"Task overdue","value":"7 days","severity":"critical","description":"Resolution date was 2026-06-08 — now overdue"},{"label":"Days since last EoL","value":35,"severity":"critical","description":"Five weeks without evidence"},{"label":"Attendance rate","value":"65%","severity":"critical","description":"Sharp decline since employer restructure"},{"label":"OTJ hours","value":"Significantly Behind","severity":"critical","description":"At risk of failing EPA gateway requirements"}],"auditTimeline":[{"id":"EVT-L009-001","timestamp":"2026-04-20T09:00:00Z","type":"TASK_CREATE","label":"Intervention task created","detail":"Involve Manager task created — attendance declining","actor":"System"},{"id":"EVT-L009-002","timestamp":"2026-05-11T09:30:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email sent with manager CC. One-line reply from learner saying 'will try to catch up'.","actor":"Coach"},{"id":"EVT-L009-003","timestamp":"2026-06-08T00:00:00Z","type":"TASK_PATCH","label":"Task marked overdue","detail":"Resolution date passed — task now overdue","actor":"System"}],"status":"Pending","interventionDueDate":"2026-06-20","email":"fatima.al.hassan@example.test","apprenticeEmail":"fatima.al.hassan@example.test","amEmail":"manager.9@example.test","managerEmail":"manager.9@example.test","taskId":"L009","taskListId":"demo-list","daysSinceEoL":35,"daysUntilDue":""},{"id":"L010","name":"Saoirse Murphy","initials":"SM","employer":"Greenfield Media","programme":"Digital Marketing Level 3","coach":"Alex Mercer","attendanceRate":55,"engagementStatus":"Inactive","otjStatus":"Significantly Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":36,"lastIntervention":"2026-05-10","resolutionDate":"2026-06-22","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"31-35","riskScore":835,"priority":"high","recommendedAction":"Critical — 42 days since any contact, overdue, and attendance near zero. Immediate escalation needed with a hard deadline. Prepare formal withdrawal if no response.","contacts":["Learner","Manager","Senior Coach"],"nextSteps":["Send formal final warning email immediately","Phone call attempt within 24 hours","Brief senior coach and document escalation chain","Initiate BIL or withdrawal paperwork"],"draftMessage":{"subject":"Immediate action required: Your apprenticeship is at risk","body":"Dear Saoirse,\n\nI need to follow up urgently as we still haven't seen any learning activity from you for 42 days. This means:\n\n• No attendance at coaching or delivery sessions\n• No OTJ logs (self-study, portfolio work, or module learning)\n\nAt this stage, your apprenticeship is at risk of being paused or ended. You now have three options:\n\n1. Submit a learning activity immediately\n2. Request a Break in Learning (BIL)\n3. Confirm withdrawal\n\nPlease reply no later than 5 working days from today.\n\nWe're here to help, but we need immediate action.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"unresponsive","receptiveness":"None detectable — complete communication blackout for 6+ weeks","suggestedStyle":"Formal and consequence-focused; document all steps for potential withdrawal process","engagementSummary":"Saoirse has had no contact with the coach since early May. Attendance has been zero for 4 weeks. Prior to the silence, messages were brief and indicated dissatisfaction with the programme format.","risks":["Complete communication blackout","Attendance zero for 4 weeks","Prior signals of programme dissatisfaction","Formal withdrawal may be imminent"],"freshness":"2026-06-14T08:00:00Z"},"riskSignals":[{"label":"Task overdue","value":"10 days","severity":"critical","description":"Resolution date was 2026-06-05"},{"label":"Days since last contact","value":42,"severity":"critical","description":"Six weeks with no coach contact or response"},{"label":"Attendance rate","value":"55%","severity":"critical","description":"Zero attendance in last 4 weeks"},{"label":"Prior dissatisfaction signals","value":"Present","severity":"critical","description":"Learner expressed concerns about programme format before going silent"}],"auditTimeline":[{"id":"EVT-L010-001","timestamp":"2026-04-10T09:00:00Z","type":"TASK_CREATE","label":"Escalation task created","detail":"Rescalate task created — prior Involve Manager stage produced no change","actor":"System"},{"id":"EVT-L010-002","timestamp":"2026-05-04T10:00:00Z","type":"SEND_EMAIL","label":"Re-escalation email sent","detail":"Formal re-escalation email sent. No reply.","actor":"Coach"},{"id":"EVT-L010-003","timestamp":"2026-06-05T00:00:00Z","type":"TASK_PATCH","label":"Task marked overdue","detail":"Resolution date passed — escalation now critical","actor":"System"}],"status":"Pending","interventionDueDate":"2026-06-22","email":"saoirse.murphy@example.test","apprenticeEmail":"saoirse.murphy@example.test","amEmail":"manager.10@example.test","managerEmail":"manager.10@example.test","taskId":"L010","taskListId":"demo-list","daysSinceEoL":36,"daysUntilDue":""},{"id":"L011","name":"Oluwaseun Adeyemi","initials":"OA","employer":"Castlebrook Consulting","programme":"Data Analyst Level 4","coach":"Alex Mercer","attendanceRate":40,"engagementStatus":"Inactive","otjStatus":"Significantly Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":55,"lastIntervention":"2026-04-21","resolutionDate":"2026-05-30","isOverdue":true,"taskStatus":"Pending","matchScore":100,"action":"Provisional BIL","range":"31-35","riskScore":1655,"priority":"critical","recommendedAction":"Provisional BIL stage. Learner has not responded in 55 days. Formal action required — confirm BIL or initiate withdrawal process.","contacts":["Learner","Manager","Senior Coach","Delivery Team"],"nextSteps":["Issue formal Provisional BIL notice","Set a 10-working-day response window","If no response, initiate formal withdrawal process","Ensure all contact attempts are documented","Notify delivery team to pause module delivery"],"draftMessage":{"subject":"Final notice – Immediate action required to avoid withdrawal","body":"Dear Oluwaseun,\n\nIt has now been 55 days without any recorded learning activity, and despite multiple reminders, we have not seen progress.\n\nThis is your final opportunity to continue your apprenticeship. Both you and your manager are copied in, as this situation now requires urgent attention.\n\nTo remain on the programme, you must take one of the following actions immediately:\n\n• Submit a learning activity today\n• Request a Break in Learning (BIL) if personal or work-related circumstances are preventing progress\n• Confirm withdrawal if you cannot continue\n\nIf we do not receive evidence of learning or a confirmed next step within 10 working days, we will move to formal withdrawal.\n\nWe are here to support you, but this requires your immediate response.\n\nBest regards,\nAlex Mercer"},"aiInsights":{"tone":"unresponsive","receptiveness":"None — no contact in 55 days","suggestedStyle":"Formal written notice only; verbal contact no longer the primary channel","engagementSummary":"Oluwaseun has had zero engagement for nearly two months. All prior communication channels (email, calendar invites) have received no response. Attendance dropped to zero in April. Pattern is consistent with either personal crisis or programme abandonment.","risks":["55 days of total non-engagement","Attendance at zero for 7 weeks","Formal withdrawal proceedings may be necessary","No awareness of learner circumstances — urgent welfare check recommended"],"freshness":"2026-06-14T06:00:00Z"},"riskSignals":[{"label":"Task overdue","value":"16 days","severity":"critical","description":"Resolution date was 2026-05-30"},{"label":"Days since last contact","value":55,"severity":"critical","description":"Nearly 8 weeks of silence"},{"label":"Attendance rate","value":"40%","severity":"critical","description":"Zero attendance for 7 weeks"},{"label":"Stage","value":"Provisional BIL","severity":"critical","description":"Highest escalation stage before formal withdrawal"}],"auditTimeline":[{"id":"EVT-L011-001","timestamp":"2026-03-20T09:00:00Z","type":"TASK_CREATE","label":"Early intervention task created","detail":"Initial early intervention — EoL gap first identified","actor":"System"},{"id":"EVT-L011-002","timestamp":"2026-04-01T10:00:00Z","type":"SEND_EMAIL","label":"Early intervention email sent","detail":"Early intervention email sent. No reply.","actor":"Coach"},{"id":"EVT-L011-003","timestamp":"2026-04-15T10:00:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Involve Manager email sent. Manager confirmed they would speak to learner. No change.","actor":"Coach"},{"id":"EVT-L011-004","timestamp":"2026-04-21T11:00:00Z","type":"SEND_EMAIL","label":"Provisional BIL notice issued","detail":"Formal Provisional BIL notice sent to learner and manager. No response to date.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-05-30","email":"oluwaseun.adeyemi@example.test","apprenticeEmail":"oluwaseun.adeyemi@example.test","amEmail":"manager.11@example.test","managerEmail":"manager.11@example.test","taskId":"L011","taskListId":"demo-list","daysSinceEoL":55,"daysUntilDue":""},{"id":"L012","name":"Bryony Sinclair","initials":"BS","employer":"Oakwood Financial Services","programme":"Business Analyst Level 4","coach":"Alex Mercer","attendanceRate":48,"engagementStatus":"Inactive","otjStatus":"Significantly Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":60,"lastIntervention":"2026-04-16","resolutionDate":"2026-05-25","isOverdue":true,"taskStatus":"Pending","matchScore":100,"action":"Provisional BIL","range":"36-40","riskScore":1680,"priority":"critical","recommendedAction":"60-day silence. Formal withdrawal proceedings should begin unless BIL is confirmed immediately. Escalate to senior leadership.","contacts":["Learner","Manager","Senior Coach","Delivery Team","Compliance"],"nextSteps":["Issue final formal withdrawal notice","Copy compliance team on all correspondence","Set a 5-working-day final deadline","Prepare withdrawal paperwork","Contact employer HR if no response from manager"],"draftMessage":{"subject":"Final notice – Immediate action required to avoid withdrawal","body":"Dear Bryony,\n\nIt has now been 60 days without any recorded learning activity, and despite multiple formal notices, we have not seen any progress or response.\n\nThis is your final opportunity to continue your apprenticeship. To remain on the programme, you must take one of the following actions immediately:\n\n• Submit a learning activity today\n• Request a Break in Learning (BIL)\n• Confirm withdrawal\n\nIf we do not receive a confirmed next step within 5 working days, we will move to formal withdrawal.\n\nBest regards,\nAlex Mercer"},"aiInsights":{"tone":"unresponsive","receptiveness":"None — complete blackout for 60 days","suggestedStyle":"Formal correspondence only; welfare referral may be appropriate","engagementSummary":"Bryony has had no engagement with the programme or coach for 60 days. All contact attempts via email and calendar have been ignored. Prior to the blackout, communication was declining. Employer HR may need to be involved.","risks":["60-day total non-engagement","Formal withdrawal required if no response","Employer unresponsive to manager CC'd emails","Compliance documentation must be maintained"],"freshness":"2026-06-14T06:00:00Z"},"riskSignals":[{"label":"Task overdue","value":"21 days","severity":"critical","description":"Resolution date was 2026-05-25 — now 3 weeks past"},{"label":"Days since last contact","value":60,"severity":"critical","description":"Two months of complete silence"},{"label":"Attendance rate","value":"48%","severity":"critical","description":"Zero attendance for 8+ weeks"},{"label":"Employer response","value":"None","severity":"critical","description":"Manager has not acknowledged any CC'd emails"}],"auditTimeline":[{"id":"EVT-L012-001","timestamp":"2026-03-10T09:00:00Z","type":"TASK_CREATE","label":"First intervention task created","detail":"Early Intervention task — EoL gap growing","actor":"System"},{"id":"EVT-L012-002","timestamp":"2026-03-25T10:00:00Z","type":"SEND_EMAIL","label":"Early intervention email sent","detail":"Email sent. No reply.","actor":"Coach"},{"id":"EVT-L012-003","timestamp":"2026-04-08T10:00:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email with manager CC. No reply from learner or manager.","actor":"Coach"},{"id":"EVT-L012-004","timestamp":"2026-04-16T11:00:00Z","type":"SEND_EMAIL","label":"Provisional BIL formal notice issued","detail":"Formal notice sent to learner, manager, and senior coach. Deadline set. No response.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-05-25","email":"bryony.sinclair@example.test","apprenticeEmail":"bryony.sinclair@example.test","amEmail":"manager.12@example.test","managerEmail":"manager.12@example.test","taskId":"L012","taskListId":"demo-list","daysSinceEoL":60,"daysUntilDue":""},{"id":"L013","name":"Marcus Okafor","initials":"MO","employer":"Trellis Digital","programme":"Digital Marketing Level 3","coach":"Alex Mercer","attendanceRate":72,"engagementStatus":"At Risk","otjStatus":"Behind","evidenceStatus":"Overdue","daysSinceLastIntervention":31,"lastIntervention":"2026-05-15","resolutionDate":"2026-06-18","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Involve Manager","range":"31-35","riskScore":910,"priority":"high","recommendedAction":"Risky profile but mitigating factors present — learner's manager is actively engaged and a plan is in motion. Monitor closely before escalating further.","contacts":["Learner","Manager"],"nextSteps":["Confirm with manager whether the agreed learning plan has started","Request a learner EoL log within 7 days as proof of re-engagement","Schedule a 3-way call if no evidence by deadline"],"draftMessage":{"subject":"Action Needed: Learning Activity Required for Your Apprenticeship","body":"Dear Marcus,\n\nI wanted to follow up on our recent discussion. Your manager has been in touch and we've agreed a plan to help you get back on track.\n\nAs the next step, please log at least one piece of learning activity within the next 7 days. This can be as simple as a short written reflection on recent work.\n\nYour manager is copied in here and is ready to support you in finding the time.\n\nLooking forward to seeing your progress.\n\nThanks,\nAlex Mercer"},"aiInsights":{"tone":"neutral","receptiveness":"Moderate-high — learner has engaged verbally and manager is actively involved; written follow-through has been the gap","suggestedStyle":"Collaborative and progress-focused; reinforce the plan that's already in place rather than issuing new warnings","engagementSummary":"Despite a 38-day EoL gap and an overdue task, Marcus has had a productive 3-way call with his coach and manager. A learning plan has been agreed. The risk is real but the trajectory is improving.","risks":["Task overdue","38-day EoL gap","Follow-through on agreed plan not yet verified"],"freshness":"2026-06-13T15:00:00Z"},"riskSignals":[{"label":"Task overdue","value":"5 days","severity":"warning","description":"Overdue but mitigated by active manager plan"},{"label":"Days since last EoL","value":38,"severity":"critical","description":"Over 5 weeks without evidence"},{"label":"Manager engagement","value":"Active","severity":"ok","description":"Manager attended 3-way call and agreed to support"},{"label":"Learner verbal commitment","value":"Made","severity":"ok","description":"Learner confirmed plan in call — awaiting written evidence"}],"auditTimeline":[{"id":"EVT-L013-001","timestamp":"2026-04-25T09:00:00Z","type":"TASK_CREATE","label":"Involve Manager task created","detail":"EoL gap identified — manager involvement initiated","actor":"System"},{"id":"EVT-L013-002","timestamp":"2026-05-08T10:30:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email sent with manager CC. Manager replied confirming they would discuss in their next 1:1.","actor":"Coach"},{"id":"EVT-L013-003","timestamp":"2026-06-01T14:00:00Z","type":"INSIGHT_REFRESH","label":"3-way call completed","detail":"Coach, learner, and manager held a call. Learning plan agreed. Follow-up evidence due by 2026-06-22.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-06-18","email":"marcus.okafor@example.test","apprenticeEmail":"marcus.okafor@example.test","amEmail":"manager.13@example.test","managerEmail":"manager.13@example.test","taskId":"L013","taskListId":"demo-list","daysSinceEoL":38,"daysUntilDue":""},{"id":"L014","name":"Simone Beaumont","initials":"SB","employer":"Clearfield Advisory","programme":"Business Analyst Level 4","coach":"Alex Mercer","attendanceRate":91,"engagementStatus":"Recovered","otjStatus":"On Track","evidenceStatus":"Logged","daysSinceLastIntervention":7,"lastIntervention":"2026-06-08","resolutionDate":"2026-07-10","isOverdue":false,"taskStatus":"Pending","matchScore":100,"action":"Early Intervention","range":"31-35","riskScore":390,"priority":"low","recommendedAction":"Recently recovered from a high-risk period. Simone has re-engaged strongly — maintain light-touch monitoring for the next month.","contacts":["Learner"],"nextSteps":["Send a brief positive check-in acknowledging the recovery","Confirm next EoL submission target","Review in 30 days unless new signals emerge"],"draftMessage":{"subject":"A quick check in on your Evidence of Learning","body":"Hi Simone,\n\nHope you're doing well! Just wanted to say — it's been great to see your re-engagement with the programme over the past few weeks. Your learning activity is looking much stronger.\n\nKeep it up! Your next evidence submission target is end of June. If you need anything, feel free to get in touch.\n\nBest,\nAlex Mercer"},"aiInsights":{"tone":"engaged","receptiveness":"High — Simone is actively reaching out and asking questions about her EPA pathway","suggestedStyle":"Positive reinforcement and forward-planning; she is motivated — help her channel that into EPA preparation","engagementSummary":"Simone had a difficult period in April–May with no EoL submissions, but has fully re-engaged over the past 3 weeks. She has submitted two pieces of evidence and proactively contacted her coach twice. Recovery is genuine and sustained.","risks":["Previous disengagement pattern — maintain monitoring for 30 days"],"freshness":"2026-06-14T10:00:00Z"},"riskSignals":[{"label":"Days since last EoL","value":7,"severity":"ok","description":"Evidence submitted this week after re-engagement"},{"label":"Attendance rate","value":"91%","severity":"ok","description":"Back to strong attendance after April dip"},{"label":"OTJ hours","value":"On Track","severity":"ok","description":"Hours recovered — on pace for programme end"},{"label":"Recovery sustainability","value":"3 weeks","severity":"warning","description":"Re-engagement is recent — monitor for another month"}],"auditTimeline":[{"id":"EVT-L014-001","timestamp":"2026-04-20T09:00:00Z","type":"TASK_CREATE","label":"High-risk intervention task created","detail":"Involve Manager task created — 40-day EoL gap, attendance declining","actor":"System"},{"id":"EVT-L014-002","timestamp":"2026-05-01T10:00:00Z","type":"SEND_EMAIL","label":"Manager involvement email sent","detail":"Email sent with manager CC. Manager engaged promptly and confirmed support.","actor":"Coach"},{"id":"EVT-L014-003","timestamp":"2026-05-20T08:30:00Z","type":"TASK_COMPLETE","label":"Learner re-engaged — task completed","detail":"Simone logged EoL activity and attended session. Intervention task marked complete. New monitoring task created.","actor":"Coach"},{"id":"EVT-L014-004","timestamp":"2026-06-08T11:00:00Z","type":"SEND_EMAIL","label":"Light-touch check-in sent","detail":"Early Intervention monitoring email sent — positive tone. Learner replied same day.","actor":"Coach"}],"status":"Pending","interventionDueDate":"2026-07-10","email":"simone.beaumont@example.test","apprenticeEmail":"simone.beaumont@example.test","amEmail":"manager.14@example.test","managerEmail":"manager.14@example.test","taskId":"L014","taskListId":"demo-list","daysSinceEoL":7,"daysUntilDue":""}]};
  const DEFAULT_TEMPLATES = [{"key":"early","name":"Early Intervention","subject":"A quick check in on your Evidence of Learning","body":"Hi {{apprenticeName}},\n\nI hope you're doing well. I wanted to check in as it has been a little while since your latest learning activity was logged.\n\nIf work, workload or anything else is making it difficult to keep up, please let me know. We can identify a small next step and get things moving again.\n\nYou can book time with me here: {{calendlyLink}}\n\nBest,\n{{coachName}}"},{"key":"manager","name":"Involve Apprentice Manager","subject":"Action needed: apprenticeship learning activity","body":"Hi {{apprenticeName}},\n\nI am getting in touch because your learning activity needs attention and previous support has not yet resolved the issue. I have included your manager so we can agree protected learning time and a clear next action.\n\nPlease reply within five working days so we can confirm the plan.\n\nBest,\n{{coachName}}"},{"key":"reEscalate","name":"Re-escalate","subject":"Urgent follow-up: apprenticeship progress","body":"Hi {{apprenticeName}},\n\nThis is an urgent follow-up regarding the outstanding learning activity on your apprenticeship. The previous intervention has not yet led to the required evidence or engagement.\n\nPlease respond as soon as possible so we can agree the next step with your support team.\n\nBest,\n{{coachName}}"},{"key":"final","name":"Final warning","subject":"Final notice: action required on your apprenticeship","body":"Hi {{apprenticeName}},\n\nThis is a final notice that immediate action is required to protect your apprenticeship status. Please respond and complete the agreed learning activity by the stated deadline.\n\nBest,\n{{coachName}}"},{"key":"atRisk","name":"At-risk of BIL or withdrawal","subject":"Urgent: your apprenticeship may be placed on a break","body":"Hi {{apprenticeName}},\n\nYour apprenticeship is now at risk because the required engagement and evidence have not been completed. We need to speak urgently to understand your circumstances and agree whether a recovery plan is possible.\n\nPlease respond today or book time here: {{calendlyLink}}\n\nBest,\n{{coachName}}"}];
  const DAY = 86400000;

  const ICONS = {
    queue: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 6h14M7 12h14M7 18h14M3.5 6h.01M3.5 12h.01M3.5 18h.01"/></svg>',
    template: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a2 2 0 0 1 2 2v14H5V5a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.8 1.8 0 0 0 .36 2l.04.04-2.12 2.12-.04-.04a1.8 1.8 0 0 0-2-.36 1.8 1.8 0 0 0-1.1 1.64V20.5h-3v-.06a1.8 1.8 0 0 0-1.1-1.64 1.8 1.8 0 0 0-2 .36l-.04.04-2.12-2.12.04-.04a1.8 1.8 0 0 0 .36-2A1.8 1.8 0 0 0 5.04 14H5v-3h.04a1.8 1.8 0 0 0 1.64-1.1 1.8 1.8 0 0 0-.36-2l-.04-.04L8.4 5.74l.04.04a1.8 1.8 0 0 0 2 .36A1.8 1.8 0 0 0 11.54 4.5V4.44h3v.06a1.8 1.8 0 0 0 1.1 1.64 1.8 1.8 0 0 0 2-.36l.04-.04 2.12 2.12-.04.04a1.8 1.8 0 0 0-.36 2A1.8 1.8 0 0 0 21.04 11H21v3h.04A1.8 1.8 0 0 0 19.4 15Z"/></svg>',
    info: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
    chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    spark: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z"/><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z"/></svg>',
    check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
    reset: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4v6h6"/><path d="M5.6 15a8 8 0 1 0 .4-7L4 10"/></svg>',
    close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18"/></svg>',
    clock: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
    trend: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 17 6-6 4 4 6-8"/><path d="M15 7h5v5"/></svg>',
    people: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    back: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>'
  };

  const CSS = String.raw`
    :host {
      --cf-height: 900px;
      --ink: #211d24;
      --muted: #746c78;
      --subtle: #9a929d;
      --line: rgba(42, 31, 49, .10);
      --line-strong: rgba(42, 31, 49, .16);
      --canvas: #f4f1ec;
      --surface: #fffdf9;
      --surface-2: #f9f7f3;
      --plum-950: #2f1938;
      --plum-800: #472451;
      --plum-700: #573164;
      --violet: #7555a6;
      --aqua: #77b9c7;
      --red: #b43b45;
      --red-bg: #fff0f1;
      --amber: #a86815;
      --amber-bg: #fff7e8;
      --green: #26785d;
      --green-bg: #edf8f2;
      --blue: #306c8d;
      display: block;
      width: 100%;
      min-width: 0;
      height: var(--cf-height);
      color: var(--ink);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      font-size: 14px;
      line-height: 1.45;
    }
    * { box-sizing: border-box; }
    button, input, select, textarea { font: inherit; }
    button { color: inherit; }
    svg { width: 19px; height: 19px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
    [hidden] { display: none !important; }
    .app {
      height: 100%;
      display: grid;
      grid-template-rows: auto auto minmax(0, 1fr);
      overflow: hidden;
      background: var(--canvas);
      border: 1px solid rgba(39, 25, 46, .10);
      border-radius: 22px;
      box-shadow: 0 24px 70px rgba(45, 28, 52, .12);
      position: relative;
    }
    .topbar {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 13px 18px 13px 14px;
      background: rgba(255,253,249,.90);
      border-bottom: 1px solid var(--line);
      backdrop-filter: blur(18px);
      z-index: 5;
    }
    .brand-wrap { display: flex; align-items: center; gap: 13px; min-width: 0; }
    .brand-mark {
      width: 45px; height: 45px; border-radius: 14px;
      display: grid; place-items: center;
      color: white;
      background: linear-gradient(145deg, var(--plum-800), #684880 66%, var(--aqua));
      box-shadow: inset 0 1px rgba(255,255,255,.25), 0 8px 18px rgba(71,36,81,.17);
      font-weight: 800; letter-spacing: -.04em;
    }
    .brand-copy { min-width: 0; }
    .brand-title { font-size: 18px; font-weight: 780; letter-spacing: -.035em; white-space: nowrap; }
    .brand-title span { color: var(--violet); }
    .brand-subtitle { color: var(--muted); font-size: 12px; margin-top: 1px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .top-actions { display: flex; align-items: center; gap: 9px; }
    .demo-status {
      display: inline-flex; align-items: center; gap: 7px;
      padding: 7px 10px; border: 1px solid var(--line);
      border-radius: 999px; color: var(--muted); background: rgba(255,255,255,.65); font-size: 12px;
    }
    .demo-status::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: var(--green); box-shadow: 0 0 0 4px rgba(38,120,93,.11); }
    .btn {
      border: 1px solid var(--line-strong); background: var(--surface); border-radius: 11px;
      min-height: 38px; padding: 8px 12px; display: inline-flex; align-items: center; justify-content: center; gap: 8px;
      font-weight: 700; font-size: 12px; cursor: pointer; transition: transform .16s ease, border-color .16s ease, background .16s ease, box-shadow .16s ease;
    }
    .btn:hover { transform: translateY(-1px); border-color: rgba(87,49,100,.28); box-shadow: 0 7px 18px rgba(43,29,49,.08); }
    .btn:focus-visible, .rail-btn:focus-visible, .queue-card:focus-visible, .metric:focus-visible, .icon-btn:focus-visible { outline: 3px solid rgba(117,85,166,.22); outline-offset: 2px; }
    .btn.primary { background: var(--plum-800); color: #fff; border-color: var(--plum-800); }
    .btn.primary:hover { background: var(--plum-700); }
    .btn.soft { background: #f0eaf3; color: var(--plum-800); border-color: transparent; }
    .btn.danger-soft { background: var(--red-bg); color: var(--red); border-color: transparent; }
    .icon-btn { width: 38px; height: 38px; padding: 0; border-radius: 11px; border: 1px solid var(--line); background: var(--surface); display: grid; place-items: center; cursor: pointer; }
    .metrics {
      display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px;
      padding: 11px 14px; border-bottom: 1px solid var(--line); background: rgba(249,247,243,.82);
    }
    .metric {
      min-width: 0; border: 1px solid var(--line); background: rgba(255,253,249,.87); border-radius: 13px;
      padding: 11px 13px; cursor: pointer; text-align: left; transition: .16s ease;
      display: grid; grid-template-columns: 36px minmax(0,1fr) auto; align-items: center; gap: 10px;
    }
    .metric:hover { border-color: rgba(87,49,100,.24); background: #fff; }
    .metric.active { border-color: rgba(87,49,100,.35); box-shadow: 0 0 0 3px rgba(117,85,166,.08); }
    .metric-icon { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: #f0eaf3; color: var(--plum-700); }
    .metric:nth-child(2) .metric-icon { background: var(--red-bg); color: var(--red); }
    .metric:nth-child(3) .metric-icon { background: var(--amber-bg); color: var(--amber); }
    .metric:nth-child(4) .metric-icon { background: var(--green-bg); color: var(--green); }
    .metric-label { color: var(--muted); font-size: 11px; font-weight: 700; letter-spacing: .01em; min-width:0; }
    .metric-value { font-size: 24px; line-height: 1; font-weight: 800; letter-spacing: -.04em; }
    .workspace { min-height: 0; display: grid; grid-template-columns: 70px minmax(270px, 320px) minmax(390px, 1fr) minmax(270px, 310px); }
    .rail {
      background: var(--plum-950); padding: 13px 9px; border-right: 1px solid rgba(255,255,255,.06);
      display: flex; flex-direction: column; align-items: center; gap: 8px;
    }
    .rail-btn {
      width: 50px; min-height: 50px; border: 0; border-radius: 13px; background: transparent; color: rgba(255,255,255,.62);
      display: grid; place-items: center; cursor: pointer; position: relative; transition: .16s ease;
    }
    .rail-btn:hover { color: white; background: rgba(255,255,255,.09); }
    .rail-btn.active { color: white; background: rgba(255,255,255,.14); }
    .rail-btn.active::before { content: ''; position: absolute; left: -9px; width: 3px; height: 24px; border-radius: 0 4px 4px 0; background: var(--aqua); }
    .rail-spacer { flex: 1; }
    .queue-pane { min-height: 0; display: flex; flex-direction: column; background: var(--surface); border-right: 1px solid var(--line); }
    .pane-head { padding: 15px 15px 12px; border-bottom: 1px solid var(--line); }
    .pane-kicker { color: var(--violet); font-size: 11px; font-weight: 800; letter-spacing: .075em; text-transform: uppercase; }
    .pane-title-row { display: flex; align-items: end; justify-content: space-between; gap: 8px; }
    .pane-title { font-size: 20px; font-weight: 780; letter-spacing: -.035em; }
    .count { color: var(--muted); font-size: 12px; }
    .search-wrap { position: relative; margin-top: 12px; }
    .search-wrap svg { position: absolute; left: 11px; top: 50%; transform: translateY(-50%); color: var(--subtle); width: 17px; height: 17px; }
    .search-wrap input { width: 100%; height: 39px; border: 1px solid var(--line-strong); border-radius: 10px; background: #fff; padding: 8px 10px 8px 35px; color: var(--ink); }
    .search-wrap input:focus { outline: none; border-color: rgba(87,49,100,.38); box-shadow: 0 0 0 3px rgba(117,85,166,.08); }
    .filter-row { display: flex; gap: 6px; margin-top: 10px; overflow-x: auto; scrollbar-width: none; }
    .filter-row::-webkit-scrollbar { display: none; }
    .filter-chip { border: 1px solid var(--line); background: var(--surface-2); color: var(--muted); border-radius: 999px; padding: 6px 9px; font-size: 11px; font-weight: 750; cursor: pointer; white-space: nowrap; }
    .filter-chip.active { background: var(--plum-800); color: #fff; border-color: var(--plum-800); }
    .queue-list { min-height: 0; overflow-y: auto; padding: 9px; display: flex; flex-direction: column; gap: 6px; }
    .queue-card {
      width: 100%; border: 1px solid transparent; background: transparent; border-radius: 12px; padding: 10px;
      text-align: left; cursor: pointer; display: grid; grid-template-columns: 39px minmax(0,1fr) auto; gap: 10px; align-items: center; transition: .15s ease;
    }
    .queue-card:hover { background: var(--surface-2); border-color: var(--line); }
    .queue-card.selected { background: #f1ebf3; border-color: rgba(87,49,100,.15); box-shadow: inset 3px 0 var(--plum-700); }
    .avatar { width: 39px; height: 39px; border-radius: 12px; display: grid; place-items: center; background: #ede7ef; color: var(--plum-700); font-size: 12px; font-weight: 850; }
    .queue-name { font-weight: 770; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .queue-days { font-size: 12px; font-weight: 820; white-space: nowrap; font-variant-numeric: tabular-nums; }
    .queue-card.critical .queue-days { color: var(--red); }
    .queue-card.high .queue-days { color: var(--amber); }
    .queue-card.medium .queue-days { color: #9b6f18; }
    .queue-card.low .queue-days { color: var(--blue); }
    .queue-card.very-low .queue-days { color: var(--green); }
    .detail-pane { min-width: 0; min-height: 0; overflow-y: auto; padding: 20px; background: #f8f6f2; }
    .learner-hero {
      border: 1px solid var(--line); border-radius: 18px; background: var(--surface); padding: 18px;
      display: grid; grid-template-columns: minmax(0,1fr); gap: 16px; position: relative; overflow: hidden;
    }
    .learner-hero::before { content: ''; position: absolute; inset: 0 auto 0 0; width: 5px; background: var(--plum-700); }
    .learner-hero.critical::before { background: var(--red); }
    .learner-hero.high::before { background: var(--amber); }
    .learner-hero.medium::before { background: #c08e2b; }
    .learner-hero.low::before { background: var(--blue); }
    .learner-hero.very-low::before { background: var(--green); }
    .hero-identity { display: flex; gap: 13px; align-items: center; min-width: 0; }
    .hero-avatar { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: var(--plum-950); color: white; font-size: 15px; font-weight: 850; flex: 0 0 auto; }
    .hero-name { font-size: 23px; font-weight: 820; letter-spacing: -.045em; line-height: 1.1; }
    .hero-meta { color: var(--muted); font-size: 12px; margin-top: 4px; }
    .hero-due { color: var(--muted); font-size: 11px; }
    .hero-due.overdue { color: var(--red); font-weight: 760; }
    .summary-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 9px; margin-top: 12px; }
    .summary-cell { border: 1px solid var(--line); background: var(--surface); border-radius: 12px; padding: 11px; }
    .summary-cell span { color: var(--muted); font-size: 11px; display: block; }
    .summary-cell strong { font-size: 13px; display: block; margin-top: 3px; }
    .section { margin-top: 17px; }
    .section-head { display: flex; align-items: end; justify-content: space-between; gap: 12px; margin-bottom: 9px; }
    .section-title { font-size: 15px; font-weight: 800; letter-spacing: -.025em; }
    .section-note { color: var(--muted); font-size: 11px; }
    .signals { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 9px; }
    .signal-card { border: 1px solid var(--line); background: var(--surface); border-radius: 13px; padding: 12px; min-height: 72px; display:flex; align-items:center; }
    .signal-top { display: flex; justify-content: space-between; gap: 10px; align-items: flex-start; }
    .signal-label { font-size: 12px; font-weight: 780; }
    .signal-value { font-size: 12px; font-weight: 820; white-space: nowrap; }
    .signal-card.critical .signal-value { color: var(--red); }
    .signal-card.warning .signal-value { color: var(--amber); }
    .signal-card.ok .signal-value { color: var(--green); }
    .explanation {
      background: var(--plum-950); color: white; border-radius: 16px; padding: 15px 16px;
      display: grid; grid-template-columns: 34px minmax(0,1fr); gap: 12px; align-items: start;
    }
    .explanation-icon { width: 34px; height: 34px; border-radius: 10px; background: rgba(255,255,255,.12); display: grid; place-items: center; color: #b9dce3; }
    .explanation h3 { margin: 0; font-size: 13px; }
    .explanation p { margin: 4px 0 0; color: rgba(255,255,255,.74); font-size: 12px; }
    .timeline { border: 1px solid var(--line); background: var(--surface); border-radius: 14px; padding: 4px 13px; }
    .timeline-item { display: grid; grid-template-columns: 10px minmax(0,1fr) auto; gap: 10px; padding: 11px 0; border-bottom: 1px solid var(--line); align-items: start; }
    .timeline-item:last-child { border-bottom: 0; }
    .timeline-dot { width: 8px; height: 8px; margin-top: 5px; border-radius: 50%; background: var(--aqua); box-shadow: 0 0 0 4px rgba(119,185,199,.13); }
    .timeline-label { font-size: 12px; font-weight: 750; }
    .timeline-detail { color: var(--muted); font-size: 11px; margin-top: 2px; }
    .timeline-date { color: var(--subtle); font-size: 10px; white-space: nowrap; }
    .action-pane { min-height: 0; overflow-y: auto; padding: 16px; background: var(--surface); border-left: 1px solid var(--line); }
    .action-label { color: var(--violet); font-size: 11px; font-weight: 850; text-transform: uppercase; letter-spacing: .075em; }
    .action-title { font-size: 19px; font-weight: 820; letter-spacing: -.035em; margin-top: 3px; }
    .action-meta { color: var(--muted); font-size: 11px; margin-top: 5px; }
    .action-meta.overdue { color: var(--red); font-weight: 760; }
    .action-stage { margin-top: 12px; border: 1px solid rgba(87,49,100,.16); border-radius: 14px; padding: 13px; background: #f5f0f6; }
    .stage-name { font-size: 13px; font-weight: 800; }
    .stage-copy { color: var(--muted); font-size: 11px; margin-top: 5px; }
    .contact-row { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
    .contact-pill { background: #e3f1f3; color: #315f6a; border-radius: 999px; padding: 5px 8px; font-size: 10px; font-weight: 780; }
    .steps { margin-top: 15px; }
    .steps-title { font-size: 12px; font-weight: 800; margin-bottom: 7px; }
    .step {
      width: 100%; display: grid; grid-template-columns: 23px minmax(0,1fr); gap: 9px; align-items: start;
      border: 0; background: transparent; padding: 8px 0; text-align: left; cursor: pointer; color: var(--ink);
    }
    .step.auto { cursor: default; }
    .step.auto:not(.done) .step-check { border-style: dashed; background: var(--surface-2); }
    .step-check { width: 21px; height: 21px; border-radius: 7px; border: 1px solid var(--line-strong); display: grid; place-items: center; color: transparent; background: white; }
    .step.done .step-check { background: var(--green); border-color: var(--green); color: white; }
    .step-copy { font-size: 11px; color: var(--muted); padding-top: 2px; }
    .action-buttons { display: grid; gap: 8px; margin-top: 16px; }
    .action-buttons .btn { width: 100%; min-height: 43px; }
    .score-link { margin-top: 13px; border: 0; background: transparent; color: var(--violet); font-size: 11px; font-weight: 760; cursor: pointer; padding: 4px 0; }
    .completed-banner { margin-top: 13px; padding: 10px; border-radius: 11px; background: var(--green-bg); color: var(--green); font-size: 11px; font-weight: 720; }
    .empty { margin: auto; padding: 30px; color: var(--muted); text-align: center; }

    .drawer-backdrop { position: absolute; inset: 0; background: rgba(35,22,41,.32); backdrop-filter: blur(4px); z-index: 20; opacity: 0; pointer-events: none; transition: opacity .22s ease; }
    .drawer-backdrop.open { opacity: 1; pointer-events: auto; }
    .drawer {
      position: absolute; z-index: 21; top: 0; right: 0; bottom: 0; width: min(480px, 92%);
      background: rgba(255,253,249,.97); border-left: 1px solid var(--line); box-shadow: -24px 0 65px rgba(38,24,43,.16);
      transform: translateX(102%); transition: transform .28s cubic-bezier(.2,.75,.25,1); display: flex; flex-direction: column;
      backdrop-filter: blur(20px);
    }
    .drawer.open { transform: translateX(0); }
    .drawer-head { padding: 17px 18px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 14px; }
    .drawer-kicker { color: var(--violet); font-size: 10px; font-weight: 850; text-transform: uppercase; letter-spacing: .08em; }
    .drawer-title { font-size: 20px; font-weight: 820; letter-spacing: -.035em; margin-top: 2px; }
    .drawer-body { min-height: 0; overflow-y: auto; padding: 18px; }
    .drawer-foot { padding: 13px 18px; border-top: 1px solid var(--line); background: rgba(249,247,243,.9); display: flex; justify-content: flex-end; gap: 8px; }
    .form-group { margin-bottom: 13px; }
    .form-group label { display: block; font-size: 11px; font-weight: 780; color: var(--muted); margin-bottom: 5px; }
    .form-group input, .form-group textarea, .form-group select { width: 100%; border: 1px solid var(--line-strong); border-radius: 10px; background: white; padding: 10px 11px; color: var(--ink); }
    .form-group textarea { min-height: 180px; resize: vertical; }
    .form-group input:focus, .form-group textarea:focus, .form-group select:focus { outline: none; border-color: rgba(87,49,100,.38); box-shadow: 0 0 0 3px rgba(117,85,166,.08); }
    .insight-card { border: 1px solid var(--line); border-radius: 13px; padding: 12px; background: var(--surface-2); margin-bottom: 9px; }
    .insight-card span { display: block; color: var(--muted); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: .05em; }
    .insight-card strong, .insight-card p { display: block; margin: 4px 0 0; font-size: 12px; }
    .risk-list { margin: 7px 0 0; padding-left: 18px; color: var(--muted); font-size: 11px; }
    .tabs { display: grid; grid-template-columns: 1fr 1fr; padding: 4px; background: #eee9ef; border-radius: 11px; margin-bottom: 13px; }
    .tab { border: 0; background: transparent; border-radius: 8px; padding: 8px; cursor: pointer; font-size: 11px; font-weight: 780; color: var(--muted); }
    .tab.active { background: white; color: var(--plum-800); box-shadow: 0 2px 7px rgba(44,29,50,.07); }
    .template-list { display: flex; flex-direction: column; gap: 8px; }
    .template-item { border: 1px solid var(--line); border-radius: 13px; padding: 12px; background: var(--surface); }
    .template-item-head { display: flex; justify-content: space-between; gap: 8px; align-items: center; }
    .template-name { font-size: 12px; font-weight: 800; }
    .template-subject { color: var(--muted); font-size: 11px; margin-top: 4px; }
    .template-actions { display: flex; gap: 5px; }
    .small-btn { border: 1px solid var(--line); background: var(--surface-2); border-radius: 8px; padding: 6px 8px; font-size: 10px; font-weight: 780; cursor: pointer; }
    .about-copy h3 { font-size: 14px; margin: 16px 0 5px; }
    .about-copy p, .about-copy li { color: var(--muted); font-size: 12px; }
    .about-copy ul { padding-left: 18px; }
    .score-row { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 10px; padding: 10px 0; border-bottom: 1px solid var(--line); font-size: 12px; }
    .score-row:last-child { border-bottom: 0; }
    .score-row span { color: var(--muted); }
    .score-total { background: var(--plum-950); color: white; border-radius: 12px; padding: 12px; display: flex; justify-content: space-between; margin-top: 12px; font-weight: 800; }
    .toast { position: absolute; z-index: 40; left: 50%; bottom: 18px; transform: translate(-50%, 18px); opacity: 0; pointer-events: none; background: var(--plum-950); color: white; border-radius: 10px; padding: 10px 13px; font-size: 11px; font-weight: 720; box-shadow: 0 12px 28px rgba(34,20,40,.24); transition: .2s ease; }
    .toast.show { opacity: 1; transform: translate(-50%,0); }
    .guide-bar { position: absolute; z-index: 12; left: 84px; right: 14px; bottom: 14px; border: 1px solid rgba(87,49,100,.19); background: rgba(255,253,249,.96); box-shadow: 0 14px 35px rgba(46,29,52,.15); border-radius: 14px; padding: 11px 12px; display: grid; grid-template-columns: auto minmax(0,1fr) auto; gap: 12px; align-items: center; backdrop-filter: blur(16px); }
    .guide-step { width: 30px; height: 30px; border-radius: 10px; background: var(--plum-800); color: white; display: grid; place-items: center; font-weight: 850; font-size: 11px; }
    .guide-title { font-size: 12px; font-weight: 800; }
    .guide-copy { color: var(--muted); font-size: 11px; margin-top: 2px; }
    .guide-actions { display: flex; gap: 6px; }
    .guide-target { box-shadow: 0 0 0 4px rgba(117,85,166,.18), 0 14px 32px rgba(57,34,65,.13) !important; position: relative; z-index: 11; }

    @media (max-width: 1120px) {
      .workspace { grid-template-columns: 66px minmax(250px, 300px) minmax(390px,1fr); }
      .action-pane { display: none; }
      .detail-pane { padding-right: 18px; }
      .mobile-action-bar { display: grid !important; }
    }
    .mobile-action-bar { display: none; grid-template-columns: 1fr auto; gap: 8px; margin-top: 13px; }
    @media (max-width: 820px) {
      :host { --cf-height: 980px; }
      .topbar { align-items: flex-start; }
      .brand-subtitle, .demo-status { display: none; }
      .top-actions .btn span { display: none; }
      .metrics { grid-template-columns: repeat(2, minmax(0,1fr)); }
      .workspace { grid-template-columns: 58px minmax(230px, 280px) minmax(330px,1fr); }
      .rail-btn { width: 44px; }
      .summary-grid { grid-template-columns: 1fr; }
      .signals { grid-template-columns: 1fr; }
    }
    @media (max-width: 650px) {
      :host { --cf-height: 1080px; }
      .app { border-radius: 16px; }
      .topbar { padding: 11px; }
      .brand-mark { width: 39px; height: 39px; border-radius: 12px; }
      .brand-title { font-size: 16px; }
      .metrics { padding: 8px; gap: 7px; }
      .metric { grid-template-columns: 31px minmax(0,1fr); padding: 8px; }
      .metric-icon { width: 31px; height: 31px; }
      .metric-note { display: none; }
      .metric-value { grid-column: 2; font-size: 20px; }
      .workspace { grid-template-columns: 1fr; grid-template-rows: auto 330px minmax(0,1fr); }
      .rail { flex-direction: row; padding: 7px 9px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.08); }
      .rail-btn { width: 43px; min-height: 40px; }
      .rail-btn.active::before { left: 50%; bottom: -7px; top: auto; width: 24px; height: 3px; transform: translateX(-50%); border-radius: 4px 4px 0 0; }
      .rail-spacer { flex: 1; }
      .queue-pane { border-right: 0; border-bottom: 1px solid var(--line); }
      .queue-list { display: grid; grid-auto-flow: column; grid-auto-columns: minmax(240px, 78%); overflow-x: auto; overflow-y: hidden; }
      .detail-pane { padding: 13px; }
      .action-pane { display: none; }
      .learner-hero { grid-template-columns: 1fr; }
      .status-stack { align-items: flex-start; flex-direction: row; }
      .guide-bar { left: 10px; right: 10px; bottom: 10px; grid-template-columns: auto minmax(0,1fr); }
      .guide-actions { grid-column: 1 / -1; justify-content: flex-end; }
    }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { scroll-behavior: auto !important; transition-duration: .001ms !important; animation-duration: .001ms !important; } }
  `;

  const clone = x => JSON.parse(JSON.stringify(x));
  const esc = value => String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const dateOnly = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const addDays = (d,n) => new Date(d.getTime()+n*DAY);
  const isoDate = d => d.toISOString().slice(0,10);
  const formatDate = value => {
    if (!value || value === 'N/A') return 'No contact recorded';
    const d = new Date(`${String(value).slice(0,10)}T12:00:00`);
    return new Intl.DateTimeFormat('en-GB',{day:'2-digit',month:'short',year:'numeric'}).format(d);
  };
  const relativeDate = value => {
    if (!value || value === 'N/A') return 'Never';
    const days = Math.floor((dateOnly(new Date()) - dateOnly(new Date(`${String(value).slice(0,10)}T12:00:00`))) / DAY);
    if (days <= 0) return 'Today';
    if (days === 1) return '1 day ago';
    return `${days} days ago`;
  };
  const stageIcon = action => {
    const a = String(action||'').toLowerCase();
    if (a.includes('provisional') || a.includes('withdrawal') || a.includes('bil')) return '⚠';
    if (a.includes('final')) return '◷';
    if (a.includes('re-escalate') || a.includes('rescalate')) return '↻';
    if (a.includes('manager')) return '◇';
    return '•';
  };
  const templateKey = action => {
    const a = String(action||'').toLowerCase();
    if (a.includes('provisional') || a.includes('withdrawal') || a.includes('bil')) return 'atRisk';
    if (a.includes('final')) return 'final';
    if (a.includes('re-escalate') || a.includes('rescalate')) return 'reEscalate';
    if (a.includes('manager') || a.includes('csm')) return 'manager';
    return 'early';
  };
  const workflowFor = learner => {
    const action = String(learner.action || '').toLowerCase();
    const context = `${learner.recommendedAction || ''} ${learner.evidenceStatus || ''} ${learner.otjStatus || ''}`.toLowerCase();

    if (action.includes('provisional') || action.includes('withdrawal') || action.includes('bil')) {
      return [
        { text: 'Send the formal notice', autoOn: 'send' },
        { text: 'Review the response by the deadline', autoOn: null }
      ];
    }

    if (action.includes('manager') || action.includes('csm')) {
      let followUp = 'Confirm the agreed support is in place';
      if (context.includes('protected learning')) followUp = 'Confirm protected learning time';
      else if (context.includes('evidence') || context.includes('logging')) followUp = 'Check for new evidence or a response';
      else if (context.includes('plan') || context.includes('re-engag')) followUp = 'Confirm the recovery plan has started';
      return [
        { text: 'Send the learner and manager message', autoOn: 'send' },
        { text: followUp, autoOn: null }
      ];
    }

    let followUp = 'Confirm the next evidence submission';
    if (context.includes('attendance')) followUp = 'Agree the attendance or support plan';
    else if (context.includes('otj') || context.includes('off-the-job')) followUp = 'Confirm an OTJ logging target';
    else if (context.includes('recover') || learner.engagementStatus === 'Recovered') followUp = 'Review progress at the next check-in';
    return [
      { text: 'Send the learner check-in', autoOn: 'send' },
      { text: followUp, autoOn: null }
    ];
  };

  const prepareLearners = () => {
    const baseline = new Date(`${SOURCE_DATA.baselineDate}T12:00:00`);
    const today = dateOnly(new Date());
    const delta = Math.round((today - dateOnly(baseline)) / DAY);
    return clone(SOURCE_DATA.learners).map(l => {
      const shift = value => (!value || value === 'N/A') ? value : isoDate(addDays(new Date(`${String(value).slice(0,10)}T12:00:00`), delta));
      l.resolutionDate = shift(l.resolutionDate);
      l.interventionDueDate = shift(l.interventionDueDate);
      l.lastIntervention = shift(l.lastIntervention);
      l.taskStatus = l.taskStatus || l.status || 'Pending';
      l.status = l.taskStatus;
      l.workflow = workflowFor(l).slice(0, 2);
      const existingChecklist = Array.isArray(l.checklist) ? l.checklist : [];
      l.checklist = l.workflow.map((_, i) => Boolean(existingChecklist[i]));
      l.isOverdue = l.taskStatus !== 'Completed' && new Date(`${l.resolutionDate}T23:59:59`) < today;
      return l;
    });
  };
  const dueSoon = l => l.taskStatus !== 'Completed' && !l.isOverdue && ((new Date(`${l.resolutionDate}T23:59:59`) - dateOnly(new Date())) / DAY) < 7;
  const scoreBreakdown = l => {
    const a = String(l.action||'').toLowerCase();
    let stage = 100;
    if (a.includes('provisional')) stage = 1000;
    else if (a.includes('initiate')) stage = 800;
    else if (a.includes('re-escalate') || a.includes('rescalate')) stage = 600;
    else if (a.includes('manager')) stage = 400;
    else if (a.includes('early')) stage = 200;
    let contact = 250;
    if (l.lastIntervention && l.lastIntervention !== 'N/A') {
      const days = Math.max(0, Math.floor((dateOnly(new Date()) - dateOnly(new Date(`${l.lastIntervention}T12:00:00`))) / DAY));
      contact = Math.min(200, days * 5);
    }
    let due = 0;
    if (l.resolutionDate) {
      const diff = (new Date(`${l.resolutionDate}T23:59:59`) - dateOnly(new Date())) / DAY;
      if (diff < 0) due = 300; else if (diff <= 3) due = 200; else if (diff <= 7) due = 100; else if (diff <= 14) due = 50;
    }
    const eol = (parseInt(String(l.range||'').match(/\d+/)?.[0] || '0',10) || 0) * 5;
    return {stage, contact, due, eol, total: stage+contact+due+eol};
  };
  const priorityFor = score => score >= 1000 ? 'critical' : score >= 700 ? 'high' : score >= 400 ? 'medium' : score >= 200 ? 'low' : 'very-low';
  const actionExplanation = learner => {
    const signals = (learner.riskSignals || []).filter(s => s.severity !== 'ok').slice(0,3).map(s => s.label.toLowerCase());
    if (!signals.length) return 'This learner is currently stable. The task remains visible for routine monitoring and timely follow-up.';
    const joined = signals.length > 1 ? `${signals.slice(0,-1).join(', ')} and ${signals.at(-1)}` : signals[0];
    return `Priority is driven by ${joined}. CoachFlow combines escalation stage, contact recency, deadline pressure and Evidence of Learning position.`;
  };
  const fillTemplate = (template, learner, coachName, calendly) => ({
    subject: template.subject,
    body: template.body
      .replaceAll('{{apprenticeName}}', learner.name.split(' ')[0])
      .replaceAll('{{coachName}}', coachName)
      .replaceAll('{{calendlyLink}}', calendly || 'your booking link')
      .replaceAll('{{daysSinceEoL}}', String(learner.daysSinceEoL || learner.daysSinceLastIntervention || 'several'))
  });

  class CoachFlowDecisionDemo extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({mode:'open'});
      this.storageKey = this.getAttribute('storage-key') || 'coachflow-decision-workspace-v2';
      this.toastTimer = null;
      this.state = this.initialState();
    }
    initialState() {
      const learners = prepareLearners();
      let saved = null;
      try { saved = JSON.parse(localStorage.getItem(this.storageKey) || 'null'); } catch {}
      if (saved?.learners) {
        const map = new Map(saved.learners.map(x => [x.id,x]));
        learners.forEach(l => {
          const s = map.get(l.id); if (!s) return;
          l.taskStatus = s.taskStatus || l.taskStatus;
          l.status = l.taskStatus;
          l.auditTimeline = s.auditTimeline || l.auditTimeline;
          l.lastIntervention = s.lastIntervention || l.lastIntervention;
          l.checklist = l.workflow.map((_, i) => Boolean((s.checklist || [])[i]));
          l.isOverdue = l.taskStatus !== 'Completed' && new Date(`${l.resolutionDate}T23:59:59`) < dateOnly(new Date());
        });
      }
      const sorted = learners.filter(l => l.taskStatus !== 'Completed').sort((a,b) => scoreBreakdown(b).total - scoreBreakdown(a).total);
      return {
        learners,
        selectedId: saved?.selectedId && learners.some(l => l.id === saved.selectedId) ? saved.selectedId : (sorted[0]?.id || learners[0]?.id),
        coachName: saved?.coachName || 'Alex Mercer',
        calendly: saved?.calendly || 'https://calendly.com/demo-coach',
        templates: saved?.templates || clone(DEFAULT_TEMPLATES),
        search: '', filter: 'active', summary: null,
        drawer: null, draftMode: 'default', editingTemplate: null,
        guideStep: 0
      };
    }
    connectedCallback() {
      if (this.hasAttribute('height')) this.style.setProperty('--cf-height', this.getAttribute('height'));
      this.renderShell();
      this.bind();
      this.updateAll();
    }
    persist() {
      try { localStorage.setItem(this.storageKey, JSON.stringify({
        learners: this.state.learners.map(l => ({id:l.id,taskStatus:l.taskStatus,auditTimeline:l.auditTimeline,lastIntervention:l.lastIntervention,checklist:l.checklist})),
        selectedId:this.state.selectedId, coachName:this.state.coachName, calendly:this.state.calendly, templates:this.state.templates
      })); } catch {}
    }
    icon(name) { return ICONS[name] || ''; }
    renderShell() {
      this.shadowRoot.innerHTML = `<style>${CSS}</style>
        <div class="app" id="app">
          <header class="topbar">
            <div class="brand-wrap">
              <div class="brand-mark">CF</div>
              <div class="brand-copy"><div class="brand-title">Coach<span>Flow</span></div><div class="brand-subtitle">Intervention decisions, explained and actioned</div></div>
            </div>
            <div class="top-actions">
              <span class="demo-status">Simulated data</span>
              <button class="btn soft" id="startGuide" type="button">${this.icon('spark')}<span>Try 60-second demo</span></button>
              <button class="icon-btn" id="resetDemo" type="button" title="Reset demo" aria-label="Reset demo">${this.icon('reset')}</button>
            </div>
          </header>
          <section class="metrics" id="metrics"></section>
          <div class="workspace">
            <nav class="rail" aria-label="CoachFlow sections">
              <button class="rail-btn active" data-route="queue" type="button" title="Intervention queue" aria-label="Intervention queue">${this.icon('queue')}</button>
              <button class="rail-btn" data-route="templates" type="button" title="Templates" aria-label="Templates">${this.icon('template')}</button>
              <button class="rail-btn" data-route="settings" type="button" title="Settings" aria-label="Settings">${this.icon('settings')}</button>
              <div class="rail-spacer"></div>
              <button class="rail-btn" data-route="about" type="button" title="About this demo" aria-label="About this demo">${this.icon('info')}</button>
            </nav>
            <aside class="queue-pane" id="queuePane">
              <div class="pane-head">
                
                <div class="pane-title-row"><div class="pane-title">Learners</div><div class="count" id="queueCount"></div></div>
                <div class="search-wrap">${this.icon('search')}<input id="searchInput" type="search" placeholder="Search learners" aria-label="Search learners"></div>
                <div class="filter-row" id="filterRow">
                  <button class="filter-chip active" data-filter="active" type="button">Active</button>
                  <button class="filter-chip" data-filter="critical" type="button">Critical</button>
                  <button class="filter-chip" data-filter="overdue" type="button">Overdue</button>
                  <button class="filter-chip" data-filter="completed" type="button">Completed</button>
                  <button class="filter-chip" data-filter="all" type="button">All</button>
                </div>
              </div>
              <div class="queue-list" id="queueList"></div>
            </aside>
            <main class="detail-pane" id="detailPane"></main>
            <aside class="action-pane" id="actionPane"></aside>
          </div>
          <div class="drawer-backdrop" id="drawerBackdrop"></div>
          <aside class="drawer" id="drawer" aria-hidden="true"><div class="drawer-head"><div><div class="drawer-kicker" id="drawerKicker"></div><div class="drawer-title" id="drawerTitle"></div></div><button class="icon-btn" id="closeDrawer" type="button" aria-label="Close drawer">${this.icon('close')}</button></div><div class="drawer-body" id="drawerBody"></div><div class="drawer-foot" id="drawerFoot"></div></aside>
          <div class="toast" id="toast" role="status" aria-live="polite"></div>
          <div class="guide-bar" id="guideBar" hidden></div>
        </div>`;
    }
    bind() {
      const $ = id => this.shadowRoot.getElementById(id);
      $('searchInput').addEventListener('input', e => { this.state.search = e.target.value; this.updateQueue(); });
      $('filterRow').addEventListener('click', e => { const b=e.target.closest('[data-filter]'); if(!b)return; this.state.filter=b.dataset.filter; this.state.summary=null; this.updateAll(); });
      $('queueList').addEventListener('click', e => { const c=e.target.closest('[data-learner]'); if(!c)return; this.state.selectedId=c.dataset.learner; this.persist(); this.updateAll(); });
      $('metrics').addEventListener('click', e => { const m=e.target.closest('[data-summary]'); if(!m)return; const key=m.dataset.summary; this.state.summary=this.state.summary===key?null:key; this.state.filter='all'; this.updateAll(); });
      this.shadowRoot.querySelector('.rail').addEventListener('click', e => { const b=e.target.closest('[data-route]'); if(!b)return; this.route(b.dataset.route); });
      $('drawerBackdrop').addEventListener('click', () => this.closeDrawer());
      $('closeDrawer').addEventListener('click', () => this.closeDrawer());
      $('resetDemo').addEventListener('click', () => this.resetDemo());
      $('startGuide').addEventListener('click', () => this.startGuide());
      $('detailPane').addEventListener('click', e => this.handleMainClick(e));
      $('actionPane').addEventListener('click', e => this.handleMainClick(e));
      $('drawer').addEventListener('click', e => this.handleDrawerClick(e));
      $('guideBar').addEventListener('click', e => this.handleGuideClick(e));
      this.shadowRoot.addEventListener('keydown', e => { if (e.key === 'Escape') { if(this.state.drawer) this.closeDrawer(); else if(this.state.guideStep) this.endGuide(); } });
    }
    selected() { return this.state.learners.find(l => l.id === this.state.selectedId) || this.state.learners[0]; }
    metrics() {
      const active=this.state.learners.filter(l=>l.taskStatus!=='Completed');
      return {active:active.length, overdue:active.filter(l=>l.isOverdue).length, dueSoon:active.filter(dueSoon).length, completed:this.state.learners.filter(l=>l.taskStatus==='Completed').length};
    }
    filtered() {
      const q=this.state.search.trim().toLowerCase();
      let list=this.state.learners.filter(l=>!q || `${l.name} ${l.employer} ${l.programme}`.toLowerCase().includes(q));
      const f=this.state.summary || this.state.filter;
      if(f==='active') list=list.filter(l=>l.taskStatus!=='Completed');
      if(f==='critical') list=list.filter(l=>priorityFor(scoreBreakdown(l).total)==='critical' && l.taskStatus!=='Completed');
      if(f==='overdue') list=list.filter(l=>l.isOverdue && l.taskStatus!=='Completed');
      if(f==='dueSoon') list=list.filter(dueSoon);
      if(f==='completed') list=list.filter(l=>l.taskStatus==='Completed');
      return list.sort((a,b)=> scoreBreakdown(b).total-scoreBreakdown(a).total || a.name.localeCompare(b.name));
    }
    updateAll() { this.updateMetrics(); this.updateQueue(); this.updateDetail(); this.updateAction(); this.updateGuide(); }
    updateMetrics() {
      const m=this.metrics();
      const defs=[
        ['active','Active',m.active,'people'],
        ['overdue','Overdue',m.overdue,'clock'],
        ['dueSoon','Due soon',m.dueSoon,'calendar'],
        ['completed','Completed',m.completed,'check']
      ];
      this.shadowRoot.getElementById('metrics').innerHTML=defs.map(([key,label,value,icon])=>`<button class="metric ${this.state.summary===key?'active':''}" data-summary="${key}" type="button"><span class="metric-icon">${this.icon(icon)}</span><span class="metric-label">${label}</span><strong class="metric-value">${value}</strong></button>`).join('');
    }
    updateQueue() {
      const list=this.filtered();
      const count=this.shadowRoot.getElementById('queueCount');
      count.textContent=`${list.length}`;
      this.shadowRoot.querySelectorAll('.filter-chip').forEach(b=>b.classList.toggle('active',!this.state.summary && b.dataset.filter===this.state.filter));
      const root=this.shadowRoot.getElementById('queueList');
      if(!list.length){root.innerHTML='<div class="empty">No learners match this view.</div>';return;}
      root.innerHTML=list.map(l=>{
        const p=priorityFor(scoreBreakdown(l).total);
        const rawDays=l.daysSinceEoL ?? (l.riskSignals||[]).find(s=>/days since last eol/i.test(s.label||''))?.value;
        const parsedDays=Number.parseInt(rawDays,10);
        const daysLabel=Number.isFinite(parsedDays)?`${parsedDays} ${parsedDays===1?'day':'days'}`:'—';
        return `<button class="queue-card ${p} ${l.id===this.state.selectedId?'selected':''}" data-learner="${l.id}" type="button" aria-label="${esc(l.name)}, ${esc(daysLabel)} without EoL"><span class="avatar">${esc(l.initials)}</span><span class="queue-name">${esc(l.name)}</span><span class="queue-days" title="${esc(daysLabel)} without EoL">${esc(daysLabel)}</span></button>`;
      }).join('');
    }
    updateDetail() {
      const l=this.selected(); if(!l)return;
      const p=priorityFor(scoreBreakdown(l).total);
      const signals=(l.riskSignals||[]).slice(0,4);
      const timeline=(l.auditTimeline||[]).slice().sort((a,b)=>new Date(b.timestamp)-new Date(a.timestamp)).slice(0,4);
      this.shadowRoot.getElementById('detailPane').innerHTML=`
        <section class="learner-hero ${p}" id="learnerHero" aria-label="${esc(p.replace('-',' '))} priority learner">
          <div class="hero-identity"><div class="hero-avatar">${esc(l.initials)}</div><div><div class="hero-name">${esc(l.name)}</div><div class="hero-meta">${esc(l.employer)} · ${esc(l.programme)}</div></div></div>
        </section>
        <div class="summary-grid">
          <div class="summary-cell"><span>Attendance</span><strong>${esc(l.attendanceRate)}%</strong></div>
          <div class="summary-cell"><span>Evidence</span><strong>${esc(l.evidenceStatus)}</strong></div>
          <div class="summary-cell"><span>Last coach contact</span><strong>${esc(relativeDate(l.lastIntervention))}</strong></div>
        </div>
        <section class="section" id="whySection"><div class="section-head"><div class="section-title">Why this learner is here</div></div><div class="signals">${signals.map(s=>`<article class="signal-card ${esc(s.severity)}" title="${esc(s.description)}"><div class="signal-top"><span class="signal-label">${esc(s.label)}</span><strong class="signal-value">${esc(s.value)}</strong></div></article>`).join('')}</div></section>
        <section class="section"><div class="explanation"><div class="explanation-icon">${this.icon('trend')}</div><div><h3>Explainable priority</h3><p>${esc(actionExplanation(l))}</p></div></div></section>
        <section class="section"><div class="section-head"><div class="section-title">Recent history</div></div><div class="timeline">${timeline.map(ev=>`<div class="timeline-item"><span class="timeline-dot"></span><span><span class="timeline-label">${esc(ev.label)}</span><span class="timeline-detail">${esc(ev.detail)}</span></span><time class="timeline-date">${formatDate(ev.timestamp)}</time></div>`).join('')}</div></section>
        <div class="mobile-action-bar"><button class="btn primary" data-action="compose" type="button">${this.icon('mail')} Review intervention</button><button class="icon-btn" data-action="insights" type="button" title="Learner insights">${this.icon('spark')}</button></div>`;
    }
    updateAction() {
      const l=this.selected(); if(!l)return;
      const completed=l.taskStatus==='Completed';
      this.shadowRoot.getElementById('actionPane').innerHTML=`
        <div class="action-label">Next action</div><div class="action-title">${esc(l.action)}</div><div class="action-meta ${l.isOverdue?'overdue':''}">${completed?'Completed':l.isOverdue?'Overdue · '+formatDate(l.resolutionDate):'Due '+formatDate(l.resolutionDate)}</div>
        <div class="action-stage" id="actionStage"><div class="stage-name">${stageIcon(l.action)} ${esc(l.recommendedAction)}</div><div class="contact-row">${(l.contacts||[]).map(c=>`<span class="contact-pill">${esc(c)}</span>`).join('')}</div></div>
        <div class="steps"><div class="steps-title">Next steps</div>${(l.workflow||workflowFor(l)).slice(0,2).map((step,i)=>`<button class="step ${step.autoOn?'auto':''} ${l.checklist?.[i]?'done':''}" data-action="toggle-step" data-index="${i}" type="button" ${step.autoOn?'aria-disabled="true" title="Completes automatically when the intervention is sent"':''}><span class="step-check">${this.icon('check')}</span><span class="step-copy">${esc(step.text)}</span></button>`).join('')}</div>
        <div class="action-buttons" id="actionButtons"><button class="btn primary" data-action="compose" type="button">${this.icon('mail')} Review intervention</button><button class="btn soft" data-action="insights" type="button">${this.icon('spark')} Communication insights</button><button class="btn ${completed?'soft':'danger-soft'}" data-action="${completed?'reopen':'complete'}" type="button">${this.icon(completed?'reset':'check')} ${completed?'Reopen intervention':'Mark action complete'}</button></div>
        <button class="score-link" data-action="score" type="button">How was this priority calculated?</button>
        ${completed?'<div class="completed-banner">This intervention is complete and recorded in the learner timeline.</div>':''}`;
    }
    handleMainClick(e) {
      const b=e.target.closest('[data-action]'); if(!b)return;
      const a=b.dataset.action;
      if(a==='compose')this.openDrawer('composer');
      if(a==='insights')this.openDrawer('insights');
      if(a==='score')this.openDrawer('score');
      if(a==='complete')this.completeSelected();
      if(a==='reopen')this.reopenSelected();
      if(a==='toggle-step')this.toggleStep(Number(b.dataset.index));
    }
    route(route) {
      this.shadowRoot.querySelectorAll('.rail-btn').forEach(b=>b.classList.toggle('active',b.dataset.route===route));
      if(route==='queue'){this.closeDrawer();return;}
      this.openDrawer(route);
    }
    openDrawer(kind) {
      this.state.drawer=kind;
      const l=this.selected();
      const titleMap={composer:['Intervention','Review intervention'],insights:['Communication intelligence','Learner insights'],score:['Priority logic','How this score was built'],templates:['Workspace tools','Message templates'],settings:['Workspace tools','Coach settings'],about:['Portfolio demo','About CoachFlow']};
      const [kicker,title]=titleMap[kind]||['CoachFlow','Details'];
      this.shadowRoot.getElementById('drawerKicker').textContent=kicker;
      this.shadowRoot.getElementById('drawerTitle').textContent=title;
      this.renderDrawerBody(kind,l);
      this.shadowRoot.getElementById('drawerBackdrop').classList.add('open');
      const d=this.shadowRoot.getElementById('drawer'); d.classList.add('open'); d.setAttribute('aria-hidden','false');
    }
    closeDrawer() {
      this.state.drawer=null;
      this.shadowRoot.getElementById('drawerBackdrop').classList.remove('open');
      const d=this.shadowRoot.getElementById('drawer'); d.classList.remove('open'); d.setAttribute('aria-hidden','true');
      this.shadowRoot.getElementById('drawerBody').innerHTML=''; this.shadowRoot.getElementById('drawerFoot').innerHTML='';
      this.shadowRoot.querySelectorAll('.rail-btn').forEach(b=>b.classList.toggle('active',b.dataset.route==='queue'));
    }
    renderDrawerBody(kind,l) {
      const body=this.shadowRoot.getElementById('drawerBody'); const foot=this.shadowRoot.getElementById('drawerFoot');
      body.innerHTML='';foot.innerHTML='';
      if(kind==='composer') {
        const template=this.state.templates.find(t=>t.key===templateKey(l.action))||this.state.templates[0];
        const defaults=fillTemplate(template,l,this.state.coachName,this.state.calendly);
        const ai={subject:l.draftMessage?.subject||defaults.subject,body:l.draftMessage?.body||defaults.body};
        this.state.draftMode=this.state.draftMode||'default';
        const chosen=this.state.draftMode==='ai'?ai:defaults;
        body.innerHTML=`<div class="insight-card"><span>Recommended tone</span><strong>${esc(l.aiInsights?.suggestedStyle||'Direct, supportive and specific')}</strong></div><div class="tabs"><button class="tab ${this.state.draftMode==='default'?'active':''}" data-drawer-action="draft-default" type="button">Default template</button><button class="tab ${this.state.draftMode==='ai'?'active':''}" data-drawer-action="draft-ai" type="button">AI-adapted</button></div><div class="form-group"><label>To learner</label><input id="composeTo" type="email" value="${esc(l.apprenticeEmail||l.email||'learner@example.test')}"></div><div class="form-group"><label>CC manager</label><input id="composeCc" type="email" value="${esc(l.managerEmail||l.amEmail||'manager@example.test')}"></div><div class="form-group"><label>Subject</label><input id="composeSubject" value="${esc(chosen.subject)}"></div><div class="form-group"><label>Message</label><textarea id="composeBody">${esc(chosen.body)}</textarea></div><div class="insight-card"><span>Simulation</span><p>No email leaves the browser. Sending records a completed intervention and updates the queue, metrics and audit timeline.</p></div>`;
        foot.innerHTML=`<button class="btn" data-drawer-action="close" type="button">Cancel</button><button class="btn primary" data-drawer-action="send" type="button">${this.icon('mail')} Send message</button>`;
      }
      if(kind==='insights') {
        const i=l.aiInsights||{};
        body.innerHTML=`<div class="insight-card"><span>Tone</span><strong>${esc(i.tone||'Neutral')}</strong></div><div class="insight-card"><span>Receptiveness</span><p>${esc(i.receptiveness||'Insufficient communication history')}</p></div><div class="insight-card"><span>Suggested style</span><p>${esc(i.suggestedStyle||'Use clear, supportive language and a specific next step.')}</p></div><div class="insight-card"><span>Engagement summary</span><p>${esc(i.engagementSummary||'No summary available.')}</p></div><div class="insight-card"><span>Risks</span>${(i.risks||[]).length?`<ul class="risk-list">${i.risks.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>`:'<p>No additional communication risks detected.</p>'}</div>`;
        foot.innerHTML=`<button class="btn" data-drawer-action="refresh-insight" type="button">${this.icon('reset')} Refresh simulation</button><button class="btn primary" data-drawer-action="compose" type="button">${this.icon('mail')} Review intervention</button>`;
      }
      if(kind==='score') {
        const s=scoreBreakdown(l);
        body.innerHTML=`<div class="about-copy"><p>The score is an urgency ranking, not a probability or automated decision. It helps the coach order work while keeping every contributing signal visible.</p></div><div class="score-row"><span>Escalation stage</span><strong>+${s.stage}</strong></div><div class="score-row"><span>Time since coach contact</span><strong>+${s.contact}</strong></div><div class="score-row"><span>Deadline pressure</span><strong>+${s.due}</strong></div><div class="score-row"><span>Evidence of Learning position</span><strong>+${s.eol}</strong></div><div class="score-total"><span>Total urgency score</span><strong>${s.total}</strong></div><div class="insight-card" style="margin-top:12px"><span>Human control</span><p>The coach reviews the signals, recommended action and message before anything is recorded.</p></div>`;
        foot.innerHTML='<button class="btn primary" data-drawer-action="close" type="button">Close</button>';
      }
      if(kind==='templates') {
        body.innerHTML=`<div class="template-list">${this.state.templates.map(t=>`<article class="template-item"><div class="template-item-head"><div><div class="template-name">${esc(t.name)}</div><div class="template-subject">${esc(t.subject)}</div></div><div class="template-actions"><button class="small-btn" data-drawer-action="copy-template" data-key="${t.key}" type="button">Copy</button><button class="small-btn" data-drawer-action="edit-template" data-key="${t.key}" type="button">Edit</button></div></div></article>`).join('')}</div>`;
        foot.innerHTML='<button class="btn primary" data-drawer-action="close" type="button">Done</button>';
      }
      if(kind==='settings') {
        body.innerHTML=`<div class="about-copy"><p>These values personalise the simulated intervention drafts. They are stored only in this browser.</p></div><div class="form-group"><label>Coach name</label><input id="settingsCoach" value="${esc(this.state.coachName)}"></div><div class="form-group"><label>Booking link</label><input id="settingsCalendly" type="url" value="${esc(this.state.calendly)}"></div>`;
        foot.innerHTML='<button class="btn" data-drawer-action="close" type="button">Cancel</button><button class="btn primary" data-drawer-action="save-settings" type="button">Save settings</button>';
      }
      if(kind==='about') {
        body.innerHTML=`<div class="about-copy"><p><strong>CoachFlow</strong> is a portfolio-safe simulation of an AI-assisted intervention management system designed by Cleon Grant.</p><h3>What the original solution did</h3><ul><li>Combined learner, communication and task signals.</li><li>Ranked intervention urgency using explainable rules.</li><li>Surfaced context-aware next actions and message drafts.</li><li>Kept the coach in control through review and approval.</li><li>Recorded intervention history for operational visibility.</li></ul><h3>What this demo does</h3><p>It reproduces the decision workflow using fictional data. No Gmail, Calendar, Google Tasks, AI API or external learner system is connected.</p></div>`;
        foot.innerHTML='<button class="btn primary" data-drawer-action="close" type="button">Close</button>';
      }
      if(kind==='edit-template') {
        const t=this.state.templates.find(x=>x.key===this.state.editingTemplate);
        body.innerHTML=`<div class="form-group"><label>Template name</label><input value="${esc(t.name)}" disabled></div><div class="form-group"><label>Subject</label><input id="editTemplateSubject" value="${esc(t.subject)}"></div><div class="form-group"><label>Body</label><textarea id="editTemplateBody">${esc(t.body)}</textarea></div>`;
        foot.innerHTML='<button class="btn" data-drawer-action="back-templates" type="button">Back</button><button class="btn soft" data-drawer-action="restore-template" type="button">Restore default</button><button class="btn primary" data-drawer-action="save-template" type="button">Save template</button>';
      }
    }
    handleDrawerClick(e) {
      const b=e.target.closest('[data-drawer-action]'); if(!b)return;
      const a=b.dataset.drawerAction;
      if(a==='close')this.closeDrawer();
      if(a==='compose')this.openDrawer('composer');
      if(a==='draft-default'||a==='draft-ai'){this.state.draftMode=a==='draft-ai'?'ai':'default';this.renderDrawerBody('composer',this.selected());}
      if(a==='send')this.sendIntervention();
      if(a==='refresh-insight'){this.toast('Insights refreshed for the simulation');this.renderDrawerBody('insights',this.selected());}
      if(a==='copy-template'){const t=this.state.templates.find(x=>x.key===b.dataset.key);navigator.clipboard?.writeText(`${t.subject}\n\n${t.body}`).catch(()=>{});this.toast('Template copied');}
      if(a==='edit-template'){this.state.editingTemplate=b.dataset.key;this.state.drawer='edit-template';this.shadowRoot.getElementById('drawerKicker').textContent='Message template';this.shadowRoot.getElementById('drawerTitle').textContent='Edit template';this.renderDrawerBody('edit-template',this.selected());}
      if(a==='back-templates')this.openDrawer('templates');
      if(a==='restore-template'){const d=DEFAULT_TEMPLATES.find(x=>x.key===this.state.editingTemplate);const i=this.state.templates.findIndex(x=>x.key===this.state.editingTemplate);this.state.templates[i]=clone(d);this.persist();this.renderDrawerBody('edit-template',this.selected());this.toast('Default restored');}
      if(a==='save-template'){const t=this.state.templates.find(x=>x.key===this.state.editingTemplate);t.subject=this.shadowRoot.getElementById('editTemplateSubject').value;t.body=this.shadowRoot.getElementById('editTemplateBody').value;this.persist();this.openDrawer('templates');this.toast('Template saved');}
      if(a==='save-settings'){this.state.coachName=this.shadowRoot.getElementById('settingsCoach').value.trim()||'Coach';this.state.calendly=this.shadowRoot.getElementById('settingsCalendly').value.trim();this.persist();this.closeDrawer();this.toast('Settings saved');}
    }
    sendIntervention() {
      const l=this.selected();
      const now = new Date();
      l.workflow = (l.workflow || workflowFor(l)).slice(0, 2);
      l.checklist = l.workflow.map((_, i) => i === 0 ? true : Boolean(l.checklist?.[i]));
      l.lastIntervention=isoDate(now);
      l.resolutionDate=isoDate(addDays(now, 5));
      l.interventionDueDate=l.resolutionDate;
      l.isOverdue=false;
      l.auditTimeline=l.auditTimeline||[];
      l.auditTimeline.push({id:`DEMO-${Date.now()}`,timestamp:now.toISOString(),type:'SEND_EMAIL',label:'Intervention message sent',detail:`Message sent to ${this.shadowRoot.getElementById('composeTo').value}. The communication step was completed automatically; follow-up is due in five days.`,actor:'Coach'});
      this.persist();this.closeDrawer();this.updateAll();this.toast('Message sent · communication step completed');
    }
    completeSelected() {
      const l=this.selected();l.taskStatus='Completed';l.status='Completed';l.isOverdue=false;
      l.workflow=(l.workflow||workflowFor(l)).slice(0,2);l.checklist=l.workflow.map(()=>true);
      l.auditTimeline=l.auditTimeline||[];l.auditTimeline.push({id:`DEMO-${Date.now()}`,timestamp:new Date().toISOString(),type:'TASK_COMPLETE',label:'Intervention marked complete',detail:'Coach recorded the intervention as complete in the demo.',actor:'Coach'});
      this.persist();this.updateAll();this.toast('Action marked complete');
    }
    reopenSelected() {
      const l=this.selected();l.taskStatus='Pending';l.status='Pending';l.isOverdue=new Date(`${l.resolutionDate}T23:59:59`)<dateOnly(new Date());
      l.workflow=(l.workflow||workflowFor(l)).slice(0,2);l.checklist=l.workflow.map((step,i)=>i===0&&step.autoOn==='send' ? Boolean(l.lastIntervention&&l.lastIntervention!=='N/A') : false);
      l.auditTimeline=l.auditTimeline||[];l.auditTimeline.push({id:`DEMO-${Date.now()}`,timestamp:new Date().toISOString(),type:'TASK_PATCH',label:'Intervention reopened',detail:'Coach reopened the task for further action.',actor:'Coach'});
      this.persist();this.updateAll();this.toast('Intervention reopened');
    }
    toggleStep(i) {
      const l=this.selected();
      l.workflow=(l.workflow||workflowFor(l)).slice(0,2);
      if(l.workflow[i]?.autoOn){this.toast('This step completes automatically when the message is sent');return;}
      l.checklist=l.checklist||[];l.checklist[i]=!l.checklist[i];this.persist();this.updateAction();
    }
    resetDemo() { localStorage.removeItem(this.storageKey);this.state=this.initialState();this.closeDrawer();this.updateAll();this.toast('Demo reset'); }
    toast(message) { const t=this.shadowRoot.getElementById('toast');t.textContent=message;t.classList.add('show');clearTimeout(this.toastTimer);this.toastTimer=setTimeout(()=>t.classList.remove('show'),2300); }
    startGuide() { const top=this.state.learners.filter(l=>l.taskStatus!=='Completed').sort((a,b)=>scoreBreakdown(b).total-scoreBreakdown(a).total)[0];if(top)this.state.selectedId=top.id;this.state.guideStep=1;this.closeDrawer();this.updateAll(); }
    endGuide() { this.state.guideStep=0;this.shadowRoot.getElementById('guideBar').hidden=true;this.shadowRoot.querySelectorAll('.guide-target').forEach(el=>el.classList.remove('guide-target')); }
    handleGuideClick(e) { const b=e.target.closest('[data-guide]');if(!b)return;if(b.dataset.guide==='exit')this.endGuide();if(b.dataset.guide==='next'){this.state.guideStep++;if(this.state.guideStep>4){this.endGuide();return;}if(this.state.guideStep===4)this.openDrawer('composer');this.updateGuide();}if(b.dataset.guide==='back'){this.state.guideStep=Math.max(1,this.state.guideStep-1);if(this.state.guideStep<4&&this.state.drawer)this.closeDrawer();this.updateGuide();} }
    updateGuide() {
      const bar=this.shadowRoot.getElementById('guideBar');this.shadowRoot.querySelectorAll('.guide-target').forEach(el=>el.classList.remove('guide-target'));
      if(!this.state.guideStep){bar.hidden=true;return;}
      const steps=[
        ['Start with the queue','CoachFlow ranks active interventions so the coach knows where to begin.','#queuePane'],
        ['See the reasons','Risk signals stay visible, making the priority understandable rather than a black-box score.','#whySection'],
        ['Move from insight to action','The next-action panel turns the evidence into a clear, human-reviewed sequence.','#actionStage'],
        ['Review before anything happens','The final communication is editable. Sending only simulates the intervention and updates the audit trail.','#drawer']
      ];
      const [title,copy,target]=steps[this.state.guideStep-1];
      const el=this.shadowRoot.querySelector(target);if(el)el.classList.add('guide-target');
      bar.hidden=false;bar.innerHTML=`<span class="guide-step">${this.state.guideStep}/4</span><span><span class="guide-title">${title}</span><span class="guide-copy">${copy}</span></span><span class="guide-actions">${this.state.guideStep>1?'<button class="btn" data-guide="back" type="button">Back</button>':''}<button class="btn" data-guide="exit" type="button">Exit</button><button class="btn primary" data-guide="next" type="button">${this.state.guideStep===4?'Finish':'Next'}</button></span>`;
    }
  }

  if (!customElements.get('coachflow-demo')) customElements.define('coachflow-demo', CoachFlowDecisionDemo);
})();
