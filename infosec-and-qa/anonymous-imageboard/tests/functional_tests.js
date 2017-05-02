const chai_http = require('chai-http');
const chai = require('chai');
const server = require('../server');
const assert = chai.assert;
const ObjectID = require('mongodb').ObjectID;
const threads = [{title: "First thread", text: "fgsfds"}, 
                 {title: "Second thread", text: "Has anyone really been far even as decided to use even go want to do look more like?"}];
const comments = [{text: "What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my "+
                        "class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed "+
                        "kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but"+
                        " just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth,"+
                        " mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we"+
                        " speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare"+
                        " for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can"+
                        " be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively "+
                        "trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full "+
                        "extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution"+
                        " your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t"+
                        ", you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. "+
                        "You’re fucking dead, kiddo."},
                    {text: "Enraged inquiry: what the fuck did you just fucking say about me, you little bitch? Proudly: I'll have you know"+
                    " I graduated top of my class in the Elcor Naval Division, and I've been involved in numerous secret raids on Cerberus,"+
                    " and I have over 300 confirmed kills. Intimidating declaration: I am trained in gorilla warfare and I'm the top Elcor"+
                    " warrior in the entire Elcor Armed Forces. Offhandedly: you are nothing to me but just another target. I will wipe you the "+
                    "fuck out with precision the likes of which has never been seen before in this cluster, mark my fucking words. Vindictively: "+
                    "you think you can get away with saying that shit to me over the Extranet? Scathing suggestion: think again, fucker. "+
                    "As we speak I am contacting my secret network of Elcor agents across the galaxy and your EP is being traced right now so"+
                    " you better prepare for the storm, maggot. Additional diatribe: the storm that wipes out the pathetic little thing you call"+
                    " your life. Genuine exclamation: you're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred"+
                    " ways, and that's just with my bare hands. With prideful candor: not only am I extensively trained in unarmed combat,"+
                    " but I have access to every fleet of the Elcor Flotilla and I will use them to their full extent to wipe your miserable ass "+
                    "off the face of the galaxy, you little shit. Insincere concern: if only you could have known what unholy retribution your little "+
                    "'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. Mildly remorseful: you couldn't,"+
                    " you didn't, and now you're paying the price, you goddamn idiot. With barely contained excitement, I will shit fury all over you "+
                    "and you will drown in it. You're fucking dead, kiddo."}]
let thread_to_be_deleted = '';
let thread_to_be_modified = '';
let reply_to_be_modified = '';

chai.use(chai_http);

suite('Functional testing', () => {
    suite('Threads', () => { 
        for(let thread of threads){
            test('Create threads', (done) => {
                chai.request(server).post('/').send(
                    {thread}).end((request, response) => {
                    assert.equal(response.status, 200);
                    done();
                });                
            });
        }
        test('Fetch threads', (done) => {
            chai.request(server).get('/').end((request, response) => {
                assert.equal(response.status, 200);
                assert.isArray(response.body);
                assert.isAtMost(response.body.length, 10);
                assert.property(response.body[0], '_id');
                assert.property(response.body[0], 'creation_date');
                assert.property(response.body[0], 'last_post');
                assert.property(response.body[0], 'text');
                assert.property(response.body[0], 'title');
                assert.property(response.body[0], 'replies');
                assert.notProperty(response.body[0], 'reported');
                assert.notProperty(response.body[0], 'delete_password');
                assert.isArray(response.body[0].replies);
                assert.isAtMost(response.body[0].replies.length, 3);
                thread_to_be_deleted = response.body[0]._id;
                thread_to_be_modified = response.body[1]._id;
                done();
            });
        });
        test('Delete thread with incorrect password', (done) => {
            chai.request(server).delete('/').send(
                {thread_id: thread_to_be_deleted, password: 'nicht'})
                .end((request, response) => {
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Thread not found');
                done();
            });
        }); 
        test('Report a thread', (done) => {
            chai.request(server).put('/').send({thread_id: thread_to_be_modified})
            .end((request, response) => {
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Derezzed');
                done();
            });
        });
        test('Delete thread with correct password', (done) => {
            chai.request(server).delete('/').send(
                {thread_id: thread_to_be_deleted,password: 'wrathofthegods'})
                .end((request, response) => {
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Thread successfully deleted.');
                done();
            });
        });
    });   
    suite('Replies', () => {
        for(let comment of comments){
            test('Create a comment', (done) => {
                chai.request(server).post('/'+thread_to_be_modified)
                .send({comment}).end((request, response) => {
                    assert.equal(response.status, 200);
                    done();
                });
            });
        }
        test('Fetch individual thread', (done) => {
            chai.request(server).get('/'+thread_to_be_modified)
            .end((request, response) => {
                assert.equal(response.status, 200);
                assert.property(response.body, '_id');
                assert.property(response.body, 'text');
                assert.property(response.body, 'creation_date');
                assert.property(response.body, 'last_post');
                assert.property(response.body, 'replies');
                assert.property(response.body, 'title');
                assert.isArray(response.body.replies);
                assert.property(response.body.replies[0], '_id');
                assert.property(response.body.replies[0], 'text');
                assert.property(response.body.replies[0], 'password');
                reply_to_be_modified = response.body.replies[0]._id;
                done();
            });
        });
        test('Report a reply', (done) => {
            chai.request(server).put('/'+thread_to_be_modified).send({reply_id: reply_to_be_modified}).end((request, response) => {
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Derezzed');
                done();
            });
        });
        test('Delete a reply with correct password', (done) => {
            chai.request(server).delete('/'+thread_to_be_modified).send(
                {password: 'wrathofthegods', 
                reply_id: reply_to_be_modified}).end((request, response) => {
                assert.equal(response.status, 200);
                assert.equal(response.text, 'Reply successfully deleted');
                done();
            });
        }); 
    });
});